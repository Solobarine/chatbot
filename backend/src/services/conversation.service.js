import prisma from "../prisma/client.js";

export const createConversation = async () => {
  return await prisma.conversation.create({ data: {} });
};

export const getConversations = async () => {
  return await prisma.conversation.findMany();
};

export const getConversation = async (id) => {
  return await prisma.conversation.findUnique({
    where: { id },
  });
};

export const deleteConversation = async (id) => {
  return await prisma.conversation.delete({
    where: { id },
  });
};
