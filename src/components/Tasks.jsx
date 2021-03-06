import { FiTrash2 } from "react-icons/fi";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

function Tasks({ tasks, setTasks, status, filtered }) {
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  };

  const completedToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <section className="tasks">
      {filtered.map((task) => {
        return (
          <div className="task" key={task.id}>
            <h1 className={task.completed ? "completed" : ""}>{task.text}</h1>
            <div>
              <button
                onClick={() => completedToggle(task.id)}
                id="completed"
                title="Completed"
              >
                {task.completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              </button>
              <button
                id="delete"
                onClick={() => {
                  deleteTask(task.id);
                }}
                title="Delete"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        );
      })}
      {tasks.length > 2 && status === "All" ? (
        <button
          className="deleteAll"
          onClick={() => {
            setTasks([]);
          }}
        >
          Clear All
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default Tasks;
