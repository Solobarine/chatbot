"use client";

import { useState, ChangeEvent, useEffect, Fragment, useRef } from "react";
import { useParams } from "next/navigation";
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu } from "lucide-react";
import { useStore } from "@/store";
import MessageForm from "@/components/messages/form";
import ChatBubble from "@/components/messages/chat";
import { Message } from "@/types";

const Conversation = () => {
  const { id } = useParams<{ id: string }>();
  const store = useStore((state) => state);

  const [loading, setLoading] = useState(false);
  const [messagesError, setMessagesError] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  const endRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const generateId = () => {
    const now = Date.now().toString(16);
    const rand = Math.floor(Math.random() * 1e16).toString(16);
    return `${now.slice(0, 8)}-${now.slice(8)}-${rand.slice(0, 4)}-${rand.slice(4, 8)}-${rand.slice(8, 12)}`;
  };

  const getMessages = async () => {
    try {
      setLoading(true);
      setMessagesError("");

      const res = await fetch(`/api/messages/${id}`);

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();

      if (!data.messages) throw new Error("Something went wrong");
      if (data.error) setMessagesError(data.error);

      store.populateMessages(data.messages);
    } catch (err) {
      if (err instanceof Error) {
        setMessagesError(err.message);
      } else {
        setMessagesError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  const createMessage = async () => {
    try {
      const chatbotMessageId = generateId();
      const chatbotThinkingMessage = {
        id: chatbotMessageId,
        conversation_id: id,
        sender: "BOT",
        text: "...",
        created_at: new Date().toString(),
      } as Message;

      const userMessageId = generateId();
      const userMessage = {
        id: userMessageId,
        conversation_id: id,
        sender: "USER",
        text,
        created_at: new Date().toString(),
      } as Message;

      store.appendMessage(userMessage);
      store.appendMessage(chatbotThinkingMessage);

      setSubmitting(true);
      setError("");
      const body = { conversation_id: id, text, sender: "USER" };
      const res = await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      }

      // clear text
      setText("");

      // Update messages with responses from data
      store.deleteMessage(chatbotMessageId);
      store.deleteMessage(userMessageId);
      store.appendMessage(data.userMessage);
      store.appendMessage(data.botReply);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    getMessages();
  }, [id]);

  //scroll to bottom on message change
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [store.messages]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "1.5rem",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Box>
        <Box
          sx={{
            padding: "0.5rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar src="https://testingbot.com/free-online-tools/random-avatar/300" />
          <IconButton
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
            onClick={store.toggleListOpen}
          >
            <Menu />
          </IconButton>
        </Box>
        <Divider />
      </Box>
      {loading && (
        <Box
          sx={{
            padding: "1rem",
            overflowY: "auto",
            display: "grid",
            placeContent: "center",
            gap: "1rem",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box
          sx={{
            padding: "1rem",
            overflowY: "auto",
            display: "grid",
            placeContent: "center",
            gap: "1rem",
          }}
        >
          <Alert severity="error">Something went wrong</Alert>
        </Box>
      )}
      {!loading && !error && store.messages.length == 0 && (
        <Box
          sx={{
            padding: "1rem",
            overflowY: "auto",
            display: "grid",
            placeContent: "center",
            gap: "1rem",
          }}
        >
          <Alert severity="info">Messages is Empty.</Alert>
        </Box>
      )}
      {!loading && !messagesError && store.messages.length > 0 && (
        <Box
          sx={{
            padding: "1rem",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            height: `calc(100vh - ${3 * 56}px - 30px)`,
            gap: "1rem",
          }}
        >
          {store.messages.map((message, index) => {
            const dateObj = new Date(message.created_at);

            // Format Date
            const currentDay = dateObj.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });

            // Format Time
            const time = dateObj.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            });

            const prevDay =
              index > 0
                ? new Date(
                    store.messages[index - 1].created_at,
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : null;

            const showDate = currentDay !== prevDay;

            return (
              <Fragment key={index}>
                {showDate && (
                  <Typography
                    style={{
                      textAlign: "center",
                      margin: "1rem 0",
                      color: "#888",
                    }}
                  >
                    {`${currentDay}, ${time}`}
                  </Typography>
                )}
                <ChatBubble message={message} />
                <div ref={endRef} />
              </Fragment>
            );
          })}{" "}
        </Box>
      )}
      <MessageForm
        loading={loading || isSubmitting}
        value={text}
        handleChange={handleChange}
        error={error}
        submitForm={createMessage}
      />
    </Box>
  );
};

export default Conversation;
