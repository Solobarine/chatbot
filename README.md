# Chatbot

A minimal chatbot application built with **Next.js**, **Material UI**, **TailwindCSS**, and **Ruby on Rails**.

## Tech Stack

* **API:** Ruby on Rails
* **Frontend:** Next.js, MUI, TailwindCSS, Lucide
* **Database:** Neon DB (PostgreSQL)
* **Documentation:** Swagger, Rswag

## Screenshots

![Conversation Page](https://i.postimg.cc/NMcd0VB6/Screenshot-2025-09-16-131517.png)
![Delete Conversation Modal](https://i.postimg.cc/rw7hBsHY/Screenshot-2025-09-16-131531.png)

## Features

* Minimal chatbot interface
* REST API powered by Ruby on Rails
* UI built with MUI components and Lucide icons
* Database persistence with Neon DB

## Getting Started

### Prerequisites

* Node.js (>= 20)
* Ruby (>= 3.2.2)
* Postgres
* Docker (Required for installation via Docker)

### Installation via Docker

Run the chatbot client (Next.js) and api (Ruby on Rails) using Docker. Database is provided for this installation method.

#### 1. Pull the Docker images

```bash
docker pull solobarine/chatbot-client:latest
docker pull solobarine/chatbot-api:latest
```

#### 2. Run the containers

```bash
# Run the client on port 3000
docker run -d -p 3000:3000 solobarine/chatbot-client:latest

# Run the api on port 5000
docker run -d -p 5000:5000 solobarine/chatbot-api:latest
```

#### 3. Access the services

* Client (Next.js): [http://localhost:3000](http://localhost:3000)
* API (Ruby on Rails): [http://localhost:5000](http://localhost:5000)

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
bundle install
```

#### 3. Configure environment variables

Create a `.env` file inside the **api** folder and add your database URL:

```env
DATABASE_URL="your_neon_database_url_here"
# Visit https://neon.com/ and get a Postgres Database or install Postgres on your Machine
```

#### 4. Database setup

Push Migration to Database:

```bash
cd api
rails db:migrate
```

#### 5. Run the project

* **API (Ruby on Rails + Neon DB):**

```bash
cd api
rails s --port 5000
```

* **Client (Next.js + MUI + Tailwind):**

```bash
cd client
npm run dev
```

---

## License

This project is licensed under the [MIT License](./LICENSE.md).
