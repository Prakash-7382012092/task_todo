import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <h1 className='text-center text-success'>Task Management </h1>
               <Button variant="primary" onClick={handleShow}>
                 Add Task
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <AddTask/>
                </Modal.Body>
                
              </Modal>                 

            </div>
          </div>
        </div>
       
        <TaskList/>
      </div>
    </>
  )
}

export default App
