
import React from 'react';

const TaskList = ({ tasks, onAddTask, onDeleteTask, onToggleComplete }) => {
  const handleDelete = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleToggleComplete = (taskId) => {
    onToggleComplete(taskId);
  };


  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

