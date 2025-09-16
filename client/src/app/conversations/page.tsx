"use client";

import { useStore } from "@/store";
import { Box, IconButton, Typography } from "@mui/material";
import { Menu } from "lucide-react";

const Conversations = () => {
  const store = useStore((state) => state);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "1.5rem",
        display: "grid",
        placeContent: "center",
      }}
    >
      <IconButton
        sx={{ position: "absolute", right: 5 }}
        onClick={store.toggleListOpen}
      >
        <Menu />
      </IconButton>
      <Typography variant="h3" sx={{ color: "#46444d" }}>
        Chat with a Chatbot
      </Typography>
    </Box>
  );
};

export default Conversations;
