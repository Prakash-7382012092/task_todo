import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, fetchTodo } from '../features/taskSlice';
import EditTask from './EditTask';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  if (loading) {
    return <p className="text-center mt-3">Tasks Loading...</p>;
  }

  if (error) {
    return <p className="text-danger text-center mt-3">There is an Error: {error}</p>;
  }

  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="mb-4 text-center text-success">Tasks</h2>
          {tasks.length === 0 ? (
            <p className="text-center">No tasks available.</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <h5 className="card-title">{task.title}</h5>
                      {task.description && <p className="card-text">{task.description}</p>}
                      <p className="card-text">
                        <strong>Status:</strong> {task.status}
                      </p>
                    </div>
                    <div className="col-md-4 d-flex align-items-start justify-content-end gap-2">
                      <EditTask task={task} />
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
               
              </div>

              
            ))
          )}

          
        </div>
      </div>
    </div>
  );
};

export default TaskList;
