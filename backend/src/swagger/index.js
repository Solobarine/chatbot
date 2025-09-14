import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chatbot API",
      version: "1.0.0",
      description:
        "A minimal chatbot application backend built with **Express** and **Prisma**.",
    },
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);

export default specs;
