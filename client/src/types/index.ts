export interface Conversation {
  id: string;
  createdAt: string;
}

export interface Message {
  id: string;
  text: string;
  sender: "USER" | "BOT";
  conversationId: string;
  conversation?: Conversation;
  createdAt: string;
}
