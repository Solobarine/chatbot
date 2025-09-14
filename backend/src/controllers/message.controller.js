import * as messageService from "../services/message.service.js";

export const createMessage = async (req, res) => {
  try {
    const message = await messageService.createMessage(req.body);
    const botData = {
      conversationId: req.body.conversationId,
      text: "This is an AI generated response",
      sender: "BOT",
    };
    const botMessage = await messageService.createMessage(botData);
    return res.status(201).json({ userMessage: message, botReply: botMessage });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const messages = await messageService.getMessages(conversationId);
    return res.status(200).json({ messages });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
