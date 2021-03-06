import { useState, useRef } from "react";

function AddTask({ tasks, setTasks }) {
  const [query, setQuery] = useState("");
  const input = useRef();

  const addTask = (text) => {
    if (!text) {
      return;
    }

    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, text, completed: false };
    setTasks([...tasks, newTask]);
    setQuery("");
  };

  return (
    <section className="addTask">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(query);
        }}
      >
        <input
          type="text"
          placeholder="New Task"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={input}
          autoFocus
        />
        <button
          type="submit"
          title="Add Item"
          onClick={() => {
            addTask(query);
          }}
        >
          Add
        </button>
      </form>
    </section>
  );
}

export default AddTask;
