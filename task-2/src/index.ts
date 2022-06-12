import express from "express";
import mongoose from "mongoose";
import router from "./routes/taskRouter";
import 'dotenv/config';
var cors = require('cors');

const app = express();

app.use(express.json());
app.use("/", router);
app.use(cors());
app.options('*', cors());
app.all('*', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
});

const { DB_CONNECTION_URL, PORT } = process.env;

async function startApp() {
    try {
        await mongoose.connect(`${DB_CONNECTION_URL}`);
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}

startApp();
