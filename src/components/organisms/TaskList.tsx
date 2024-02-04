import React from 'react'
import TaskCard from '../molecules/TaskCard'

// タスクの型定義
interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'inProgress' | 'done'
}

interface TaskListProps {
  tasks: Task[]
  onEdit: (id: string, newTitle: string, newDescription: string) => void
  onDelete: (id: string) => void
  onChangeStatus: (
    id: string,
    newStatus: 'todo' | 'inProgress' | 'done'
  ) => void
  filter: 'all' | 'active' | 'completed' | 'inProgress'
}

// タスクリストコンポーネント
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEdit,
  onDelete,
  onChangeStatus,
  filter, // フィルタの状態を受け取る
}) => {
  // フィルタリングされたタスクを作成
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true
    if (filter === 'active') return task.status === 'todo'
    if (filter === 'inProgress') return task.status === 'inProgress'
    if (filter === 'completed') return task.status === 'done'
    return true
  })

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          onEdit={(newTitle, newDescription) =>
            onEdit(task.id, newTitle, newDescription)
          }
          onDelete={() => onDelete(task.id)}
          onChangeStatus={(id, newStatus) => onChangeStatus(id, newStatus)}
        />
      ))}
    </div>
  )
}

export default TaskList
