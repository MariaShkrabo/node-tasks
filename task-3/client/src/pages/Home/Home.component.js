import NewTodoForm from "../../components/NewTodoForm/NewTodoForm.component";
import TodoList from "../../components/TodoList/TodoList.component";
import { Header, Wrapper } from "./Home.styles";

const Home = ({tasks}) => {
    return (
        <Wrapper>
            <Header />
            <NewTodoForm />
            <TodoList tasks={tasks}/>
        </Wrapper>
    )
}

export default Home;
