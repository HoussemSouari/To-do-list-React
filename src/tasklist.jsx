/* import React from 'react';
 

const TaskList = ({tasks, onToggleComplete}) => {

    const handToggleComplete = (taskID) => { 
        onToggleComplete(taskID);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
      };

    return (
        <ul>
            {tasks.map(task =>(
                <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => handToggleComplete(task.id)}>
                    {task.name}
                <button>Mark as done</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList; */

// TaskList.js

import React from 'react';

const TaskList = ({ tasks, onAddTask, onDeleteTask, onToggleComplete }) => {
  const handleDelete = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleToggleComplete = (taskId) => {
    onToggleComplete(taskId);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAddTask(e.target.value);
      e.target.value = '';
    }
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

