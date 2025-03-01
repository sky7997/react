import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // Add or Update Todo
  const addOrUpdateTodo = () => {
    if (!task) return;

    if (editId) {
      setTodos(todos.map(todo => todo.id === editId ? { ...todo, text: task } : todo));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    }

    setTask("");
    setSearchResults([]); // Reset search results so new todos appear
  };

  // Mark Task as Complete
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  // Delete Task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit Task
  const editTodo = (id, text) => {
    setTask(text);
    setEditId(id);
  };

  // Search Tasks
  const handleSearch = () => {
    const results = todos.filter(todo =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Todo List</h2>

      {/* Search Input and Button */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
      />
      <button onClick={handleSearch}>Search</button>

      {/* Add/Edit Input */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addOrUpdateTodo}>{editId ? "Update" : "Add"}</button>

      {/* Show todos or search results */}
      <ul>
        {(search ? searchResults : todos).length > 0 ? (
          (search ? searchResults : todos).map(todo => (
            <li key={todo.id}>
              <span 
                onClick={() => toggleComplete(todo.id)}
                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              >
                {todo.text}
              </span>
              <button onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No items found</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
