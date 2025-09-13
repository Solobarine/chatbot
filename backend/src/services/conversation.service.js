import prisma from "../prisma/client.js";

export const createConversation = async () => {
  return await prisma.conversation.create({ data: {} });
};

export const getConversations = async () => {
  return await prisma.conversation.findMany();
};
