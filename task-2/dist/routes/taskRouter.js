"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = __importDefault(require("../controllers/TaskController"));
const router = (0, express_1.default)();
router.post('/tasks', TaskController_1.default.create);
router.get('/tasks', TaskController_1.default.getAll);
router.get('/tasks/:id', TaskController_1.default.getOne);
router.patch('/tasks/:id', TaskController_1.default.modify);
router.put('/tasks/:id', TaskController_1.default.replace);
router.delete('/tasks/:id', TaskController_1.default.delete);
exports.default = router;
