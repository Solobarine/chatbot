import { z } from "zod";

const messageSchema = z.object({
  conversationId: z.uuid(),
  text: z.string().min(2).nonempty(),
  sender: z.enum(["USER", "BOT"]).default("USER"),
});
export default messageSchema;
