
const express = require("express")
const cors = require("cors")
const path = require("path")
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const incomeRoutes = require("./routes/incomeRoutes")
const expenseRoutes = require("./routes/expenseRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")
const dotenv = require("dotenv")

const app = express()
dotenv.config()

app.use(express.json())

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


//Middlewares to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "timeout"], // ✅ add timeout & case-correct headers
    credentials: true,
  })
);

// Server uploads folder
app.use("/uploads", express.static(path.join(__dirname,"uploads")))


connectDB()

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/income", incomeRoutes)
app.use("/api/v1/expense", expenseRoutes)
app.use("/api/v1/dashboard", dashboardRoutes)


if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname, "../frontend/expense-tracker/dist")));
}

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/expense-tracker/dist", "index.html"));
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))