import express from "express";
import swaggerUiExpress from "swagger-ui-express";
import conversationRoutes from "./src/routes/conversation.route.js";
import messageRoutes from "./src/routes/message.route.js";
import spec from "./src/swagger/index.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

// SWAGGER ROUTES
app.use("/api-docs/v1", swaggerUiExpress.serve, swaggerUiExpress.setup(spec));

// -------- ROUTES
app.use("/api/v1/conversations", conversationRoutes);
app.use("/api/v1/messages", messageRoutes);

// -------- ROUTE NOT FOUND => {
app.use((req, res, _next) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
  });
});

app.listen(port, () => {
  console.log(
    `🚀 \x1b[32mServer is up and running!\x1b[0m 🌍 Listening on port: \x1b[36m${port}\x1b[0m`,
  );
});
