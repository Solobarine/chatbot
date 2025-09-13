import express from "express";
import conversationRoutes from "./src/routes/controller.route.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

// -------- ROUTES
app.use("/api/v1/conversations", conversationRoutes);

app.listen(port, () => {
  console.log(
    `🚀 \x1b[32mServer is up and running!\x1b[0m 🌍 Listening on port: \x1b[36m${port}\x1b[0m`,
  );
});
