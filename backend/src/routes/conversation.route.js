import { Router } from "express";
import * as conversationController from "../controllers/conversation.controller.js";

const router = Router();

router.post("/", conversationController.createConversation);
router.get("/", conversationController.getConversations);

export default router;
