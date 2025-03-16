const express = require("express");
const dotenv = require("dotenv");
const DBConnect = require("./src/config/db.js");

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Fallback port if not defined in .env

// Connect to database
DBConnect();

// Middleware (if needed)
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome Page");
});

const userRoute = require("./src/routes/userRoute.js");

app.use("/user", userRoute);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
