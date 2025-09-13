import { Router } from "express";
import * as conversationController from "../controllers/conversation.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Conversations
 *   description: API for managing conversations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         text:
 *           type: string
 *         sender:
 *           type: string
 *           enum: [USER, BOT]
 *         conversationId:
 *           type: string
 *           format: uuid
 *         createdAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /conversations:
 *   post:
 *     summary: Create a new conversation
 *     tags: [Conversations]
 *     responses:
 *       201:
 *         description: Conversation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Server error while creating conversation
 */
router.post("/", conversationController.createConversation);

/**
 * @swagger
 * /conversations:
 *   get:
 *     summary: Get all conversations
 *     tags: [Conversations]
 *     responses:
 *       200:
 *         description: List of conversations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Server error while retrieving conversations
 */
router.get("/", conversationController.getConversations);

export default router;
