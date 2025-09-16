import { Message } from "@/types";
import { Avatar, Box, Typography } from "@mui/material";

const ChatBubble = ({ message }: { message: Message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
        flexDirection: message.sender == "BOT" ? "row" : "row-reverse",
      }}
    >
      <Avatar
        src={
          message.sender == "BOT"
            ? "https://api.dicebear.com/9.x/bottts/png"
            : "https://testingbot.com/free-online-tools/random-avatar/300"
        }
      ></Avatar>
      <Typography
        sx={{
          padding: "0.4rem 1rem",
          borderRadius:
            message.sender == "BOT"
              ? "2rem 2rem 2rem 0.8rem"
              : "2rem 2rem 0.8rem 2rem",
          backgroundColor: message.sender == "BOT" ? "#ece6f0" : "#635b72",
          color: message.sender == "BOT" ? "#635672" : "white",
          fontSize: "0.8rem",
          width: "fit",
          maxWidth: "20rem",
        }}
      >
        {message.text}
      </Typography>
    </Box>
  );
};

export default ChatBubble;
