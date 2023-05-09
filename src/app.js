import express from "express";
const app = express();
const port = 3000

app.get("/", (_req, res) => res.send("Hola"))

app.listen(port, console.log("Server on port 3000"))
