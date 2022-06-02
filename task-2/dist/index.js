"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const taskRouter_1 = __importDefault(require("./routes/taskRouter"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", taskRouter_1.default);
const { DB_CONNECTION_URL, PORT } = process.env;
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(`${DB_CONNECTION_URL}`);
            app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
        }
        catch (e) {
            console.error(e);
        }
    });
}
startApp();
