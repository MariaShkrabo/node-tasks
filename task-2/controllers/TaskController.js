import Task from "../models/Task.js";

class TaskController {
    async create(req, res) {
        try {
            const { description, isDone} = req.body;
            const task = await Task.create({ description, isDone});
            res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const tasks = await Task.find();
            return res.json(tasks);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try{
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: 'No ID specified'});
            }
            const task = await Task.findById(id);
            return res.json(task);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new TaskController();