import prisma from "../prisma/client.js";

export const createMessage = async (data) => {
  return await prisma.message.create({ data });
};

export const getMessages = async (conversationId) => {
  return await prisma.message.findMany({
    where: { conversationId },
    orderBy: { createdAt: "asc" },
  });
};
