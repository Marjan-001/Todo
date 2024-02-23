import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
    return (
        <Container>
            <h1 className="text-transparent bg-clip-text bg-primary-gradient text-center font-bold mt-5"> My Todo</h1>
         <TodoContainer/>
        </Container>
    );
};

export default Todo;