import React, { useState } from 'react';
import AddTaskForm from './addtask';
import TaskList from './tasklist';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(), // Generate a unique id for the task
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
