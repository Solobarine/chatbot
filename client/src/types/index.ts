export interface Conversation {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  text: string;
  sender: "USER" | "BOT";
  conversation_id: string;
  conversation?: Conversation;
  created_at: string;
  updated_at: string;
}
