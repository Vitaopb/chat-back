import express from "express";
import http from "http";
import WebSocket from "ws";

import cors from "cors";
import routes from "./modules/routes";

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use('/api', ...routes);

const serverHttp = http.createServer(app);
const io = require('socket.io')(serverHttp, { cors: { origin: "http://localhost:3000" } });



export { serverHttp, io };