import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import taskhubImage from './taskhub.png';

// Atoms
import Button from './components/atoms/Button';

// Molecules
import TaskForm from './components/molecules/TaskForm';

// Organisms
import TaskList from './components/organisms/TaskList';
import FilterButtons from './components/organisms/FilterButtons';

// タスクの型定義
interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'done';
}

const App: React.FC = () => {
  // タスクのリストと各種ステートの初期化
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<
    'all' | 'active' | 'completed' | 'inProgress'
  >('all');

  // タスクの追加処理
  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  }

  // タスクの削除処理
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // タスクのステータス変更処理
  const changeTaskStatus = (id: string, status: Task['status']) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)));
  }

  // タスクの編集処理
  const editTask = (id: string, newTitle: string, newDescription: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, title: newTitle, description: newDescription } : t
      )
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        <img src={taskhubImage} alt="ToDo List" width="260px" />
      </h1>
      <p>タスクを追加し、進捗を管理します。</p>

      <TaskForm
        onAddTask={addTask}
      />

      <FilterButtons
        filter={filter}
        onFilterChange={setFilter}
      />

      <TaskList
        tasks={tasks}
        onEdit={editTask}
        onDelete={deleteTask}
        onChangeStatus={changeTaskStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
