"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";
import ConversationList from "@/components/conversations/list";
import { useStore } from "@/store";

const ConversationLayout = ({ children }: { children: ReactNode }) => {
  const store = useStore((state) => state);

  const APPBAR_HEIGHT = {
    xs: 56,
    sm: 64,
  };

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
          left: {
            xs: store.listOpen ? "0rem" : "-100%",
            sm: 0,
          },
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
        }}
      >
        <ConversationList />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default ConversationLayout;
