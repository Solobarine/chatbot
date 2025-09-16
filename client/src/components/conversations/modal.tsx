"use client";

import { useStore } from "@/store";
import { Alert, Box, Button, Modal, Typography } from "@mui/material";

const ConversationModal = ({
  isOpen,
  toggleOpen,
  deleteConversation,
  isSubmitting,
  error,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
  deleteConversation: () => void;
  isSubmitting: boolean;
  error: string;
}) => {
  const id = useStore((state) => state.selectedConversationId);

  return (
    <Modal open={isOpen} onClose={toggleOpen}>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "320px",
          position: "absolute",
          outline: "none",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        {error && <Alert severity="error">{error}</Alert>}
        <Typography sx={{ textAlign: "center" }}>
          Are you sure you want to delete <br /> Conversation {id}?
        </Typography>
        <Box
          sx={{
            marginTop: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <Button
            variant="contained"
            onClick={toggleOpen}
            disabled={isSubmitting}
            sx={{
              backgroundColor: "#e8def7",
              color: "#635b71",
              borderRadius: "3rem",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={deleteConversation}
            disabled={isSubmitting}
            sx={{ borderRadius: "3rem" }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConversationModal;
