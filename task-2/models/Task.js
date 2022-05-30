import mongoose from 'mongoose';

const Task = new mongoose.Schema({
    description: {type: String, required: true},
    isDone: {type: Boolean, required: true},
})

export default mongoose.model('Task', Task);