const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Router/router");
const errorHandler = require("./Middleware/middleware");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "OPTIONS"],
    Credential: true,
  })
);
app.use("/api", router);
app.use(errorHandler);
app.listen(5000, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("server is listening...");
});
