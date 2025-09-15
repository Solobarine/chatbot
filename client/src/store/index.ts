import { Conversation } from "@/types";
import { create } from "zustand";

export interface StoreState {
  listOpen: boolean;
  toggleListOpen: () => void;
  selectedConversationId: string;
  selectConversationId: (id: string) => void;
  conversations: Conversation[];
  populateConversations: (conversations: Conversation[]) => void;
  appendConversation: (conversation: Conversation) => void;
  deleteConversation: (id: string) => void;
}

export const useStore = create<StoreState>()((set) => ({
  listOpen: false,
  conversations: [],
  selectedConversationId: "",
  toggleListOpen: () =>
    set((state) => ({
      listOpen: !state.listOpen,
      conversations: state.conversations,
    })),
  populateConversations: (conversations) =>
    set((state) => ({ ...state, conversations })),
  appendConversation: (conversation) =>
    set((state) => ({
      ...state,
      conversations: [...state.conversations, conversation],
    })),
  deleteConversation: (id) =>
    set((state) => ({
      ...state,
      conversations: state.conversations.filter((convo) => convo.id !== id),
    })),
  selectConversationId: (id) =>
    set((state) => ({
      ...state,
      selectedConversationId: id,
    })),
}));
