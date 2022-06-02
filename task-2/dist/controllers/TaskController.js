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
const Task_1 = __importDefault(require("../models/Task"));
class TaskController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { description, isDone } = req.body;
                const task = yield Task_1.default.create({ description, isDone });
                res.json(task);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield Task_1.default.find();
                return res.json(tasks);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    res.status(400).json({ message: 'No ID specified' });
                }
                const task = yield Task_1.default.findById(id);
                return res.json(task);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    modify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const taskData = req.body;
                if (!id) {
                    res.status(400).json({ message: 'No ID specified' });
                }
                const modifiedTask = yield Task_1.default.findByIdAndUpdate(id, taskData, { new: true });
                return res.json(modifiedTask);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    replace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const taskData = req.body;
                if (!id) {
                    res.status(400).json({ message: 'No ID specified' });
                }
                yield Task_1.default.replaceOne({ _id: id }, taskData);
                const modifiedTask = yield Task_1.default.findById(id);
                return res.json(modifiedTask);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    res.status(400).json({ message: 'No ID specified' });
                }
                const task = yield Task_1.default.findByIdAndDelete(id);
                return res.json(task);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.default = new TaskController();
