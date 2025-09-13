import prisma from "../prisma/client.js";

export const createConversation = async () => {
  return await prisma.conversation.create({ data: {} });
};

export const getConversations = async () => {
  return await prisma.conversation.findMany();
};

export const getConversation = async (conversationId) => {
  return await prisma.conversation.findUnique({
    where: { conversationId },
  });
};

export const deleteConversation = async (conversationId) => {
  return await prisma.conversation.delete({
    where: { conversationId },
  });
};
