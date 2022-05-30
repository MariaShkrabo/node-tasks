import express from "express";
import mongoose from "mongoose";
import router from "./routes/taskRouter.js";
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use("/", router);

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(process.env.PORT, () => console.log(`SERVER STARTED ON PORT ${process.env.PORT}`));
    } catch (e) {
        console.error(e);
    }
}

startApp();