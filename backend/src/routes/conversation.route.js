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
 *     Conversation:
 *       type: object
 *       properties:
 *         id:
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

/**
 * @swagger
 * /conversations/{conversationId}:
 *   get:
 *     summary: Get a conversation by ID
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the conversation
 *     responses:
 *       200:
 *         description: Conversation retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 title:
 *                   type: string
 *                   nullable: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Conversation not found
 *       500:
 *         description: Server error while retrieving conversation
 */
router.get("/:conversationId", conversationController.getConversation);

/**
 * @swagger
 * /conversations/{conversationId}:
 *   delete:
 *     summary: Delete a conversation by ID
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the conversation
 *     responses:
 *       204:
 *         description: Conversation deleted successfully
 *       500:
 *         description: Server error while deleting conversation
 */
router.delete("/:conversationId", conversationController.deleteConversation);

export default router;
