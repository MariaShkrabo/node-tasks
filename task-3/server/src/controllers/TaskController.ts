import Task from "../models/Task";
import {Request, Response} from "express";

class TaskController {
    async create(req: Request, res: Response) {
        try {
            const { description, isDone} = req.body;
            const task = await Task.create({ description, isDone});
            res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
            res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const tasks = await Task.find();
            res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
            return res.json(tasks);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req: Request, res: Response) {
        try{
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: 'No ID specified'});
            }
            const task = await Task.findById(id);
            res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
            return res.json(task);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async modify(req: Request, res: Response){
        try {
            const {id} = req.params;
            const taskData = req.body;
            if (!id) {
                res.status(400).json({message: 'No ID specified'});
            }
            const modifiedTask = await Task.findByIdAndUpdate(id, taskData, {new: true});
            res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
            return res.json(modifiedTask);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async replace(req: Request, res: Response){
        try {
            const {id} = req.params;
            const taskData = req.body;
            if (!id) {
                res.status(400).json({message: 'No ID specified'});
            }
            await Task.replaceOne({ _id: id }, taskData);
            const modifiedTask = await Task.findById(id);
            res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
            return res.json(modifiedTask);  
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req: Request, res: Response){
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: 'No ID specified'});
            }
            const task = await Task.findByIdAndDelete(id);
            res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
            return res.json(task); 
        } catch (e) {
            res.status(500).json(e);
        }
    }
}


export default new TaskController();
