# Chatbot

A minimal chatbot application built with **Express**, **Next.js**, **MUI**, **TailwindCSS**, and **Prisma**.

## Tech Stack

* **Backend:** Express, Prisma (PostgreSQL)
* **Frontend:** Next.js, MUI, TailwindCSS, Lucide
* **Database:** PostgreSQL (via Prisma ORM)

## Screenshots

![Conversation Page](https://i.postimg.cc/NMcd0VB6/Screenshot-2025-09-16-131517.png)
![Delete Conversation Modal](https://i.postimg.cc/rw7hBsHY/Screenshot-2025-09-16-131531.png)

## Features

* Minimal chatbot interface
* REST API powered by Express
* UI built with MUI components and Lucide icons
* Database persistence with Prisma ORM

## Getting Started

### Prerequisites

* Node.js (>= 20)
* PostgreSQL database

### Installation via Docker

Run the chatbot client (Next.js) and backend (Express) using Docker. Database is provided for this installation method.

#### 1. Pull the Docker images

```bash
docker pull solobarine/chatbot-client:latest
docker pull solobarine/chatbot-backend:latest
```

#### 2. Run the containers

```bash
# Run the client on port 3000
docker run -d -p 3000:3000 solobarine/chatbot-client:latest

# Run the backend on port 5000
docker run -d -p 5000:5000 solobarine/chatbot-backend:latest
```

#### 3. Access the services

* Client (Next.js): [http://localhost:3000](http://localhost:3000)
* Backend (Express): [http://localhost:5000](http://localhost:5000)

---

### Installation via Git

Run the chatbot locally using Git and Node.js.

#### 1. Clone the repository

```bash
git clone https://github.com/solobarine/chatbot.git
cd chatbot
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Configure environment variables

Create a `.env` file inside the **backend** folder and add your database URL:

```env
DATABASE_URL="your_database_url_here"
```

#### 4. Database setup

Generate the Prisma client:

```bash
cd backend
npx prisma generate
```

Push the Prisma schema to your database:

```bash
npx prisma db push
```

#### 5. Run the project

* **Backend (Express + Prisma):**

```bash
cd backend
npm run dev
```

* **Client (Next.js + MUI + Tailwind):**

```bash
cd client
npm run dev
```

---

## License

This project is licensed under the [MIT License](./LICENSE.md).
