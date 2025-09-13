import * as conversationService from "../services/conversation.service.js";

export const createConversation = async (_req, res) => {
  try {
    const conversation = await conversationService.createConversation();
    return res.status(201).json({ conversation });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getConversations = async (_req, res) => {
  try {
    const conversations = await conversationService.getConversations();
    return res.status(200).json({ conversations });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
