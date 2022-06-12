import { useEffect, useState } from 'react';
import './App.css';
import { readTasks } from './functions';
import Home from './pages/Home/Home.component';

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await readTasks();
      setTasks(data);
    }
    fetchData();
  })

  return (
    <Home tasks={tasks}/>
  );
}

export default App;
