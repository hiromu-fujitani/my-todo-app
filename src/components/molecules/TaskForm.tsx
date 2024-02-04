import React, { useState } from 'react';
import { Task } from '../../types';

// TaskFormPropsインターフェースを定義: onAddTask関数をプロップとして受け取る
interface TaskFormProps {
  onAddTask: (newTask: Task) => void;
}

// TaskFormコンポーネント: 新しいタスクを追加するフォーム
const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  // ステートフックを使用して、タスクのタイトル、説明、およびエラーメッセージを管理
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  // addTask関数: 新しいタスクを追加するロジックを処理
  const addTask = () => {
    let isValid = true;
    // タイトルが空かチェックし、エラーメッセージを設定
    if (!newTaskTitle) {
      setTitleError('タイトルを入力してください');
      isValid = false;
    } else {
      setTitleError('');
    }

    // 説明が空かチェックし、エラーメッセージを設定
    if (!newTaskDescription) {
      setDescriptionError('説明を入力してください');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    // バリデーションエラーがあれば早期リターン
    if (!isValid) {
      return;
    }

    // 新しいタスクオブジェクトを作成し、onAddTaskを通じて親コンポーネントに渡す
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9), // ランダムなIDを生成
      title: newTaskTitle,
      description: newTaskDescription,
      status: 'todo', // 初期ステータスは'todo'
    };

    onAddTask(newTask);

    // フォームをリセット
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  // フォームUI: タイトルと説明の入力フィールド、および追加ボタンを表示
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control custom-input"
        placeholder="タスクのタイトル"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      {titleError && <div style={{ color: 'red' }}>{titleError}</div>}
      <input
        type="text"
        className="form-control mt-2 custom-input"
        placeholder="タスクの説明"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      {descriptionError && <div style={{ color: 'red' }}>{descriptionError}</div>}
      <div className="add-button-container">
        <button className="custom-button" onClick={addTask}>
          タスクを追加
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
