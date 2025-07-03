import React from 'react';

function TaskItem({ task, deleteTask, setEditTask, toggleComplete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-info" onClick={() => toggleComplete(task.id)}>
        <h3>{task.text}</h3>
        <p>Deadline: {task.deadline || 'N/A'}</p>
      </div>
      <div className="buttons">
        <button className="edit" onClick={() => setEditTask(task)}>Edit</button>
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
