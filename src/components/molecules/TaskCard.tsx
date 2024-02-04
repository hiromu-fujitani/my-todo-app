import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './TaskCard.css'

// タスクカードコンポーネントのプロパティ定義
interface TaskCardProps {
  id: string
  title: string
  description: string
  status: 'todo' | 'inProgress' | 'done'
  onEdit: (newTitle: string, newDescription: string) => void
  onDelete: () => void
  onChangeStatus: (
    id: string,
    newStatus: 'todo' | 'inProgress' | 'done'
  ) => void
}

// タスクカードコンポーネント
const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  status,
  onEdit,
  onDelete,
  onChangeStatus,
}) => {
  // ステータスに応じたスタイルクラス
  const statusClasses = {
    todo: 'primary',
    inProgress: 'warning',
    done: 'success',
  }

  // ステータス変更用のモーダルステートと新しいステータスステート
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [newStatus, setNewStatus] = useState(status)

  // ステータス変更ハンドラ
  const handleStatusChange = (newStatus: 'todo' | 'inProgress' | 'done') => {
    setNewStatus(newStatus)
    onChangeStatus(id, newStatus)
  }

  // ステータスボタンのスタイルを返す関数
  const getStatusButtonStyle = (btnStatus: 'todo' | 'inProgress' | 'done') => {
    return status === btnStatus
      ? {
          backgroundColor: `var(--bs-${statusClasses[btnStatus]})`,
          color: 'white',
          fontWeight: 'bold',
        }
      : {}
  }

  // 編集用のモーダルステートと新しいタイトル・説明ステート
  const [showEditModal, setShowEditModal] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  // 編集保存ハンドラ
  const handleEditSave = () => {
    setShowEditModal(false)
    onEdit(newTitle, newDescription)
  }

  // 削除確認用のモーダルステート
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  // 削除ハンドラ
  const handleDelete = () => {
    setShowDeleteConfirm(true)
  }

  // 削除確認ハンドラ
  const confirmDelete = () => {
    onDelete()
    setShowDeleteConfirm(false)
  }

  return (
    <div className="card task-card mb-3">
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.5rem' }}>
          {title}
        </h5>
        <p className="card-text mt-2" style={{ fontSize: '1.2rem' }}>
          {description}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="btn-group">
            <button
              onClick={() => handleStatusChange('todo')}
              className="btn me-2"
              style={{
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                ...getStatusButtonStyle('todo'),
              }}
            >
              未着手
            </button>
            <button
              onClick={() => handleStatusChange('inProgress')}
              className="btn me-2"
              style={{
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                ...getStatusButtonStyle('inProgress'),
              }}
            >
              着手中
            </button>
            <button
              onClick={() => handleStatusChange('done')}
              className="btn"
              style={{
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                ...getStatusButtonStyle('done'),
              }}
            >
              完了
            </button>
          </div>

          <div className="task-card-actions">
            <button
              onClick={() => setShowEditModal(true)}
              className="btn btn-primary me-2"
              style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-danger"
              style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>

        {/* 編集用のモーダル */}
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>タイトルと説明を編集</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="newTitle" className="form-label">
                新しいタイトル
              </label>
              <input
                type="text"
                className="form-control"
                id="newTitle"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newDescription" className="form-label">
                新しい説明
              </label>
              <textarea
                className="form-control"
                id="newDescription"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                autoComplete="off"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleEditSave}>
              保存
            </Button>
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>
              キャンセル
            </Button>
          </Modal.Footer>
        </Modal>

        {/* 削除確認用のモーダル */}
        <Modal
          show={showDeleteConfirm}
          onHide={() => setShowDeleteConfirm(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>削除の確認</Modal.Title>
          </Modal.Header>
          <Modal.Body>本当に削除しますか？</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={confirmDelete}>
              はい
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteConfirm(false)}
            >
              いいえ
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default TaskCard