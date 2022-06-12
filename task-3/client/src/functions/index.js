import * as api from '../api';

export const readTasks = async () => {
    try {
        const { data } = await api.readTasks();
        return data;
    } catch (e) {
        console.error(e);
    }
}

export const createTask = async (task) => {
    try {
        const { data } = await api.createTask(task);
        return data;
    } catch (e) {
        console.error(e);
    }
}