import axios from 'axios';

const url = `${process.env.REACT_APP_BASE_URL}`;

export const readTasks = () => axios.get(url);

export const createTask = (newTask) => axios.post(url, newTask);