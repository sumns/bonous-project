const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Router/router");
const http = require("http");
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
server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["POST", "PUT", "GET"],
  },
});

io.on("connection", (socket) => {
  socket.emit("your id", socket.id);
  console.log(socket.id);
  socket.on("send message", (body) => {
    io.emit("message", body);
  });
  socket.on("disconnect", (data) => {
    console.log(data);
  });
});

server.listen(5000, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("server is listening...");
});
