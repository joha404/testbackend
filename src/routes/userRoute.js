const express = require("express");
const { createUser, getUser } = require("../controllers/userController");
const userRoute = express.Router();

userRoute.post("/create", createUser);
userRoute.get("/", getUser);

module.exports = userRoute;
