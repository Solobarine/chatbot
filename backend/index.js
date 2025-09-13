import express from "express";
import swaggerUiExpress from "swagger-ui-express";
import conversationRoutes from "./src/routes/conversation.route.js";
import spec from "./src/swagger/index.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

// SWAGGER ROUTES
app.use("/api-docs/v1", swaggerUiExpress.serve, swaggerUiExpress.setup(spec));

// -------- ROUTES
app.use("/api/v1/conversations", conversationRoutes);

app.listen(port, () => {
  console.log(
    `🚀 \x1b[32mServer is up and running!\x1b[0m 🌍 Listening on port: \x1b[36m${port}\x1b[0m`,
  );
});
