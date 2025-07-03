import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, setEditTask, toggleComplete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty">No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setEditTask={setEditTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
