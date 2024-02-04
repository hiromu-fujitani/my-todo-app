import React, { useState } from 'react';
import { Task } from '../../types'; 

interface TaskFormProps {
  onAddTask: (newTask: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const addTask = () => {
    if (!newTaskTitle || !newTaskDescription) {
      return;
    }

    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTaskTitle,
      description: newTaskDescription,
      status: 'todo',
    };

    onAddTask(newTask);

    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control custom-input"
        placeholder="タスクのタイトル"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <input
        type="text"
        className="form-control mt-2 custom-input"
        placeholder="タスクの説明"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      <div className="add-button-container">
        <button className="custom-button" onClick={addTask}>
          タスクを追加
        </button>
      </div>
    </div>
  );
};

export default TaskForm;