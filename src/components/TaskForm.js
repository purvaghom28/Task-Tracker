import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editTask, updateTask }) {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    if (editTask) {
      setText(editTask.text);
      setDeadline(editTask.deadline);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const taskData = {
      text,
      deadline,
    };

    if (editTask) {
      updateTask({ ...editTask, ...taskData });
    } else {
      addTask(taskData);
    }

    setText('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        placeholder="Enter a task"
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="time"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">{editTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
}

export default TaskForm;
