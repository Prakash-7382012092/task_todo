import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/taskSlice';
import Modal from 'react-bootstrap/Modal';

const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (e) => {
    e.preventDefault(); // Prevent form refresh
    dispatch(editTask({ id: task.id, title, description, status }));
    setShow(false);
    handleClose();
  };

  return (
    <div>
      <button
        className="btn btn-success px-3 py-1 bg-blue-500 text-white rounded-ms hover:bg-blue-600"
        onClick={() => setShow(true)}
      >
        Edit
      </button>

      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="mb-6" onSubmit={handleEdit}>
            <h2 className="text-xl font-semibold mb-3 text-indigo-500">Edit Task</h2>

            <div className="mb-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Task Name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Task Description"
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="ToDo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success">
                Update Task
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditTask;
