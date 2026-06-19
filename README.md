# Kidrove Workshop Landing Page

A modern, highly responsive landing page for the **Kidrove AI & Robotics Summer Workshop**. Built with a focus on premium aesthetics, this project features a React frontend utilizing Tailwind CSS for beautiful glassmorphism UI, and an Express.js backend fully integrated with MongoDB for robust form submissions.

## ✨ Features

### Frontend (React + Vite)
- **Premium Aesthetics:** Uses a custom color palette, smooth micro-animations, and glassmorphism styling (`.glass-card`).
- **Responsive Layout:** Perfectly scales across mobile, tablet, and desktop views.
- **Modern Icons:** Replaced basic emojis with professional SVG icons using `lucide-react`.
- **Interactive UI:** Smooth accordions for the FAQ section and hover-lift effects on cards.
- **Form State Management:** Includes loading spinners, success/error feedback, and HTML5 validation.

### Backend (Node.js + Express)
- **API Endpoint:** Exposes `POST /api/enquiry` for processing workshop registrations.
- **MongoDB Integration:** Uses Mongoose to define an `Enquiry` schema and save records directly to the database.
- **Robust Validation:** Validates required fields and enforces strict email format validation on the server.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Lucide React
- **Backend:** Node.js, Express.js, Cors, Dotenv
- **Database:** MongoDB, Mongoose

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### 1. Running the Backend Server
Open a terminal and navigate to the `server` directory:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory (optional if you want to use local MongoDB):
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/kidrove
```

Start the backend development server:
```bash
npm run dev
```
*The server will run on http://localhost:5000*

### 2. Running the Frontend Client
Open a new terminal window and navigate to the `client` directory:

```bash
cd client
npm install
```

Start the Vite development server:
```bash
npm run dev
```
*The frontend will run on http://localhost:5173* (or another port if 5173 is occupied).

---

## 📡 API Documentation

### `POST /api/enquiry`
Submits a new registration enquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Workshop enquiry submitted successfully",
  "data": { ... }
}
```

---

## 💡 Development Approach & Future Improvements

**Approach:**  
For this workshop landing page, I adopted a component-driven approach using React and Vite to ensure a fast, modular, and maintainable codebase. I prioritized a modern, premium user experience by integrating Tailwind CSS for styling, implementing glassmorphism effects, and utilizing Lucide-react for crisp, professional icons. The UI is fully responsive, ensuring accessibility across mobile and desktop devices. On the backend, I built a lightweight Express.js API to handle form submissions and fully integrated it with MongoDB using Mongoose for data persistence and strict server-side validation.

**Future Improvements:**  
If given more time, I would expand the backend to include rate-limiting and email notifications (e.g., via Nodemailer) to instantly send confirmation emails to parents. On the frontend, I would implement full TypeScript support to enhance type safety and developer experience, and add comprehensive unit testing using Jest and React Testing Library.
