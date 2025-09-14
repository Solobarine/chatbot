# Chatbot

A minimal chatbot application built with **Express**, **Next.js**, **MUI**, **TailwindCSS**, and **Prisma**.

## Tech Stack

- **Backend:** Express, Prisma (PostgreSQL)
- **Frontend:** Next.js, MUI, TailwindCSS
- **Database:** Configured via Prisma

## Features

- Basic chatbot interface
- API routes powered by Express
- Styled with MUI components and TailwindCSS
- Prisma as ORM for data persistence

## Getting Started

### Prerequisites
- Node.js (>= 18)
- A running database (PostgreSQL recommended)

### Installation

#### Clone the repository
```bash
git clone https://github.com/solobarine/chatbot.git
cd chatbot
```

#### Install dependencies
```bash
npm install
```

#### Setup Environment
Create a .env file in the backend folder:
```bash
DATABASE_URL="your_database_url_here"
```

#### Database Setup
From the backend folder:
```bash
npx prisma generate
```

#### Running the Project
- Backend (Express + Prisma)
```bash
cd backend
npm run dev
```

- Client (Next.js + MUI + Tailwind)
```bash
cd client
npm run dev
```

### LICENSE
This project is licensed under the [MIT License](./LICENSE.md).
