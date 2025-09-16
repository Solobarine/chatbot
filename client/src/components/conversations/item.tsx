"use client";

import {
  ListItem,
  ListItemButton,
  IconButton,
  Typography,
} from "@mui/material";
import { Conversation } from "@/types";
import { Trash2 } from "lucide-react";
import { useParams } from "next/navigation";

const Item = ({
  conversation,
  index,
  handleClick,
  handleDelete,
}: {
  conversation: Conversation;
  index: number;
  handleClick: (id: string) => void;
  handleDelete: (id: string) => void;
}) => {
  const { id } = useParams<{ id: string }>();
  return (
    <ListItem disableGutters>
      <ListItemButton
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: id == conversation.id ? "#d0c6de" : "#e8def7",
          padding: "0.5rem",
          borderRadius: "0.6rem",
          "&:hover": {
            backgroundColor: "#d0c6de",
          },
        }}
        onClick={() => handleClick(conversation.id)}
      >
        <Typography>Conversation {index + 1}</Typography>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(conversation.id);
          }}
        >
          <Trash2 />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

export default Item;
