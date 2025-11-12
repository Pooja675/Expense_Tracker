# Expense Tracker - Financial Management App.

<div align="center">
  <img width="800" alt="expense tracker" src="https://github.com/user-attachments/assets/10677732-6e90-4203-a454-34059b6a42d6" />

  <p><em>Full stack responsive Financial Management Application</em></p>
  
  [![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
</div>

## 🚀 Overview

Expense Tracker is a smart financial management app that helps users effortlessly record, categorize, and visualize their income and expenses. It provides real-time insights, downloadable reports, and interactive charts to help users track spending habits and make better budgeting decisions.

## ✨ Key Features

- **Secure Authentication**: Protects user accounts with reliable login and session management.
- **Add & Manage Transactions**: Allows users to seamlessly add and delete income and expense records.
- **Emoji Support**: Make fun and expressive with emoji reactions.
- **Interactive Dashboard**:Displays total balance, income, and expenses through clean and dynamic charts for instant financial   insights.
- **Visual Analytics**: Uses line and pie charts to help users understand spending and earning patterns over time.
- **Categorized Expense Tracking**: Organizes all expenses into clear categories like Food, Healthcare, Travel, etc., for better financial clarity.
- **Data Persistence**: All transactions and user details are securely stored and retrieved from a MongoDB database.

## 🛠️ Tech Stack

### Frontend

- **React 18**: Component-based UI development
- **TailwindCSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing
- **Hooks**: Handle state, side effects, and other functionalities
- **JWT Authentication**: Secure user authentication

### Backend

- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication

### Tools

- **Vite**: Next-generation frontend tooling
- **ESLint**: Code quality and style checking
- **Render**: Frontend deployment and hosting
- **Git & GitHub**: Version control and collaboration

## 📸 Screenshots

<div align="center">
 
   <img  height="400" alt="LoginPage" src="https://github.com/user-attachments/assets/cfe28c2e-37bc-4d9b-a78b-86ca0ba9da74"  />
   <img  height="400" alt="dashboard" src="https://github.com/user-attachments/assets/e1d106ae-ee6f-4523-9153-232f37cd29b1" />
   <img  height="400" alt="income" src="https://github.com/user-attachments/assets/4e401fce-6c0a-46d0-b46f-6f6c9d974d2c"  />
   <img  height="400" alt="expense" src="https://github.com/user-attachments/assets/bba97992-42f3-4b44-90d8-ceed1a8cedec"  />

</div>

## 🌐 Live Demo

Experience ZynkUp Chat App in action: [expense-tracker-m28a.onrender.com](expense-tracker-m28a.onrender.com)

### Demo Accounts

- **Sender User**:
  - Email: soni123@gmail.com
  - Password: Soni@123


## 📥 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Frontend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Pooja675/Expense_Tracker.git
   ```
2. Navigate to the client directory
   ```bash
   cd frontend/expense-tracker
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file in the client directory with the following variables:
   ```
   VITE_SERVER_URL=http://localhost:5555
   ```
5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```
6. Open your browser and navigate to `http://localhost:5173`

### Backend Setup

1. Clone the backend repository
   ```bash
   git clone https://github.com/Pooja675/Expense_Tracker.git
   ```
2. Navigate to the server directory
   ```bash
   cd backend 
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file with the following variables:
   ```
   DATABASE_URL=your_mongodb_connection_string/or ask the repo owner for the URI
   PORT=5555
   JWT_SECRET=your_jwt_secret
   ORIGIN=http://localhost:5173
   NODE_ENV = production
   ```
5. Start the server
   ```bash
   npm start
   # or
   yarn start
   ```


## Note:

You might need to run both the client and server simultaneously for fetching data in your local machine.

## 📁 Project Structure

```
frontend/expense-tracker
├── public/             # Static files
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context providers
│   ├── hooks/          # Handle-state
│   ├── pages/          # Main application pages
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
└── vite.config.js      # Vite configuration

server/
├── controllers/        # Request handlers
├── middleware/         # Custom middleware
├── models/             # Database models
├── routes/             # API routes
├── uploads/            # Uploaded files
└── index.js            # Server entry point

```
### 🎯 Result and Conclusion

The Expense Tracker successfully simplifies personal finance management by allowing users to record, categorize, and analyze their transactions with ease. Through an intuitive interface and visual dashboards, users can monitor their spending patterns, maintain better financial discipline, and make data-driven budgeting decisions.






