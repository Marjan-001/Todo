

const TodoCard = () => {
    return (
        <div className="bg-white rounded p-3 flex justify-between items-center border  ">
        <input type="checkbox" name="" id="" />
        <p>title</p>
        <p>status</p>
        <p>description</p>
        <div className="space-x-5">
          <button className="btn bg-red-500 px-3 py-2 rounded-sm text-white">Del</button>
          <button className="btn bg-violet-500 px-3 py-2 rounded-sm text-white">edit</button>
        </div>
      </div>
    );
};

export default TodoCard;