import { Box, Typography } from "@mui/material";

const Conversations = () => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "white",
        borderRadius: "1.5rem",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Typography variant="h3" sx={{ color: "#46444d" }}>
        Chat with a Chatbot
      </Typography>
    </Box>
  );
};

export default Conversations;
