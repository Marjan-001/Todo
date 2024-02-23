import TodoCard from "./todoCard";

const TodoContainer = () => {
  return (
    <div >
      <div className=" flex justify-between items-center ">
        <button className=" btn  bg-primary-gradient p-3 text-white rounded-lg ">Add Todo</button>
        <button className="btn  bg-primary-gradient p-3 text-white rounded-lg">Filter</button>
      </div>
      <div className=" bg-primary-gradient rounded w-full h-full p-[8px] mt-4 ">
    <div className="w-full h-full bg-white p-5 rounded-sm space-y-3 ">
    <TodoCard/>
     <TodoCard/>
     <TodoCard/>
    </div>
     
      </div>
    </div>
  );
};

export default TodoContainer;
