import { Router } from "express";
import * as messageController from "../controllers/message.controller.js";
import validate from "../middleware/validate.js";
import messageSchema from "../validations/message.schema.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: API for managing messages inside conversations
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
 * /messages:
 *   post:
 *     summary: Create a message in a conversation
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - conversationId
 *               - text
 *               - sender
 *             properties:
 *               conversationId:
 *                 type: string
 *                 format: uuid
 *               text:
 *                 type: string
 *               sender:
 *                 type: string
 *                 enum: [USER, BOT]
 *           example:
 *             conversationId: "9d3b12e8-6eaf-4d27-9b4c-53cfb5638a7e"
 *             text: "What is the weather today?"
 *             sender: "USER"
 *     responses:
 *       201:
 *         description: Message created successfully, returns the user message and bot reply
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userMessage:
 *                   $ref: '#/components/schemas/Message'
 *                 botReply:
 *                   $ref: '#/components/schemas/Message'
 *             example:
 *               userMessage:
 *                 id: "1a2b3c4d-5e6f-7a8b-9c0d-111213141516"
 *                 text: "What is the weather today?"
 *                 sender: "USER"
 *                 conversationId: "9d3b12e8-6eaf-4d27-9b4c-53cfb5638a7e"
 *                 createdAt: "2025-09-13T12:05:00.000Z"
 *               botReply:
 *                 id: "7f8e9d0c-1b2a-3d4e-5f6a-7890abcdef12"
 *                 text: "Today's weather is sunny with a high of 30°C."
 *                 sender: "BOT"
 *                 conversationId: "9d3b12e8-6eaf-4d27-9b4c-53cfb5638a7e"
 *                 createdAt: "2025-09-13T12:05:05.000Z"
 *       500:
 *         description: Server error while creating message
 */
router.post("/", validate(messageSchema), messageController.createMessage);

/**
 * @swagger
 * /messages/{conversationId}:
 *   get:
 *     summary: Get all messages in a conversation
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the conversation
 *     responses:
 *       200:
 *         description: List of messages for the conversation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 *             example:
 *               - id: "1a2b3c4d-5e6f-7a8b-9c0d-111213141516"
 *                 text: "Hello!"
 *                 sender: "USER"
 *                 conversationId: "9d3b12e8-6eaf-4d27-9b4c-53cfb5638a7e"
 *                 createdAt: "2025-09-13T12:01:00.000Z"
 *               - id: "7f8e9d0c-1b2a-3d4e-5f6a-7890abcdef12"
 *                 text: "Hi there! How can I help you today?"
 *                 sender: "BOT"
 *                 conversationId: "9d3b12e8-6eaf-4d27-9b4c-53cfb5638a7e"
 *                 createdAt: "2025-09-13T12:01:05.000Z"
 *       500:
 *         description: Server error while retrieving messages
 */
router.get("/:conversationId", messageController.getMessages);

export default router;
