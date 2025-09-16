"use client";

import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { SendHorizontal } from "lucide-react";
import { ChangeEvent } from "react";

const MessageForm = ({
  loading,
  value,
  handleChange,
  error,
  submitForm,
}: {
  loading: boolean;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  submitForm: () => void;
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      {error && (
        <Alert
          sx={{
            color: "red",
            position: "absolute",
            width: "100%",
            maxWidth: "360px",
            top: -60,
            boxShadow: 6,
            left: 0,
          }}
          severity="error"
        >
          {error}
        </Alert>
      )}
      <TextField
        fullWidth
        placeholder="Reply to Chatbot"
        variant="outlined"
        value={value}
        onChange={handleChange}
        disabled={loading}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
            backgroundColor: loading ? "#dcd6e1" : "#f7f2f9",
            color: "black",
          },
          "& .MuiInputBase-input": {
            paddingLeft: "1.2rem",
            paddingRight: "3rem",
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end" sx={{ pr: 1 }}>
                <IconButton
                  edge="end"
                  color="inherit"
                  disabled={value.trim().length == 0 || loading}
                  onClick={submitForm}
                >
                  <SendHorizontal />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default MessageForm;
