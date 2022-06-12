import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewTodoForm from "../../components/NewTodoForm/NewTodoForm.component";
import TodoList from "../../components/TodoList/TodoList.component";
import { fetchTasks } from "../../store/tasks/tasks.action";
import { Header, Wrapper } from "./Home.styles";

const Home = () => {
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(fetchTasks());
      }, []);
    
    return (
        <Wrapper>
            <Header />
            <NewTodoForm />
            <TodoList />
        </Wrapper>
    )
}

export default Home;
