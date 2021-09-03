//Create Server
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";

const urlMongo =
  "mongodb+srv://admin:Ex367336@patientsadministrator.uv5ao.mongodb.net/veterinary?retryWrites=true&w=majority";

const app = express();
//Enable CORS
// const whiteList = ["http://localhost:3000"];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whiteList.some(dom => dom === origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// }
// app.use(cors(corsOptions));
app.use(cors());

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(urlMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Add Body Parser
app.use(express.json());

//Middlewares
app.use("/", router);

//Port and start server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
