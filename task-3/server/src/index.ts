import express from "express";
import mongoose from "mongoose";
import router from "./routes/taskRouter";
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use("/", router);

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
