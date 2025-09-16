"use client";

import { ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/material";
import ConversationList from "@/components/conversations/list";
import { useStore } from "@/store";
import ConversationModal from "@/components/conversations/modal";
import { useRouter } from "next/navigation";

const ConversationLayout = ({ children }: { children: ReactNode }) => {
  const store = useStore((state) => state);

  const [isOpen, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const APPBAR_HEIGHT = {
    xs: 56,
    sm: 64,
  };

  const toggleOpen = () => {
    console.log("clicking");
    setOpen(!isOpen);
  };

  const deleteConversation = async () => {
    try {
      setSubmitting(true);
      setError("");

      const res = await fetch(
        `/api/conversations/${store.selectedConversationId}`,
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      } else {
        store.deleteConversation(store.selectedConversationId);
        store.selectConversationId("");
        setOpen(false);
        router.push("/conversations");
      }
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
    if (store.selectedConversationId) {
      setOpen(true);
    }
  }, [store.selectedConversationId]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "320px 1fr",
        },
        gap: "1rem",
        position: "relative",
        backgroundColor: "#fef7ff",
        height: {
          xs: `calc(100vh - ${APPBAR_HEIGHT.xs}px)`,
          sm: `calc(100vh - ${APPBAR_HEIGHT.sm}px)`,
        },
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          position: {
            xs: "absolute",
            sm: "static",
          },
          padding: "1rem",
          zIndex: store.listOpen ? 30 : 1,
          borderRadius: {
            xs: "0 2rem 2rem 0",
          },
          width: {
            xs: "280px",
            sm: "320px",
          },
          backgroundColor: "#fef7ff",
          height: "100%",
          transform: {
            xs: store.listOpen ? "translateX(0)" : "translateX(-100%)",
            sm: "none",
          },
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <ConversationList />
      </Box>
      <Box>{children}</Box>
      <ConversationModal
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        deleteConversation={deleteConversation}
        isSubmitting={isSubmitting}
        error={error}
      />
    </Box>
  );
};

export default ConversationLayout;
