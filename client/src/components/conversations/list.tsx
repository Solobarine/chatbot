"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { PlusCircle, Trash2 } from "lucide-react";
import Item from "@/components/conversations/item";
import { useStore } from "@/store";
import { Conversation } from "@/types";

const ConversationList = () => {
  const router = useRouter();
  const store = useStore((state) => state);

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState("");

  console.log(store.conversations);

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/conversations");

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        console.log(data);
        if (data.conversations) {
          store.populateConversations(data.conversations);
        } else {
          setError(data.error);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchConversation();
  }, []);

  const createConversation = async () => {
    try {
      setCreating(true);
      setCreateError("");

      const res = await fetch("/api/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to create conversation");
      }

      const newConv = await res.json();
      if (newConv.conversation) {
        store.appendConversation(newConv.conversation);
      } else {
        setError("Something went wrong");
      }

      router.push(`/conversations/${newConv.conversation.id}`);
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : String(err));
    } finally {
      setCreating(false);
    }
  };

  const handleClick = (id) => {
    router.push(`/conversations/${id}`);
  };

  const deleteConversation = (id: number) => {
    console.log(id);
  };

  return (
    <Box sx={{ height: "100%" }}>
      {createError && <Alert severity="error">{createError}</Alert>}
      <Button
        startIcon={creating ? <CircularProgress /> : <PlusCircle />}
        sx={{
          backgroundColor: "#ebddff",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          marginBottom: "1rem",
          color: "#200157",
          boxShadow: 6,
        }}
        fullWidth
        disabled={creating}
        onClick={createConversation}
      >
        <Typography>{creating ? "Creating..." : "Conversations"}</Typography>
      </Button>
      {loading && (
        <Box
          sx={{
            display: "grid",
            height: `calc(100% - 56px - 1rem)`,
            placeContent: "center",
          }}
        >
          <CircularProgress size="3rem" />
        </Box>
      )}
      {error && (
        <Box
          sx={{
            display: "grid",
            height: `calc(100% - 56px - 1rem)`,
            placeContent: "center",
          }}
        >
          <Typography>{error}</Typography>
        </Box>
      )}
      {store.conversations.length > 0 && (
        <List sx={{ padding: 0 }}>
          {store.conversations.map((convo, index) => (
            <Item
              key={index}
              conversation={convo}
              index={index}
              handleClick={handleClick}
              handleDelete={deleteConversation}
            />
          ))}
        </List>
      )}
      {!loading && !error && store.conversations.length == 0 && (
        <Box
          sx={{
            display: "grid",
            height: `calc(100% - 56px - 1rem)`,
            placeContent: "center",
          }}
        >
          <Typography>Empty. Create a Conversation</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ConversationList;
