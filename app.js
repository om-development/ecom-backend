const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ProductRouter = require("./src/routes/products.routes");
const AuthRouter = require("./src/routes/auth.routes");

const app = express();

// Allow frontend to connect from different port
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies from request

// Route groups
app.use("/products", ProductRouter);
app.use("/users", AuthRouter);

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

module.exports = app;
