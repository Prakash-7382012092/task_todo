import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './features/taskSlice';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const tasks = useSelector((state)=>state.tasks.tasks);
   console.log(tasks);
   console.log(tasks.length);
    const dispatch = useDispatch();
    const [title,setTitle]  = useState('');
   
    const [description,setDescription]= useState('');
    const [status,setStatus] = useState('');
   
    const handleSubmit = (e)=>{
        e.preventDefault();     
        dispatch(addTask({id:tasks.length+1,title,description,status:'To Do'}));        
        setTitle('');
        setDescription('');
        setStatus('To Do');
        setShow(false);
        handleClose();
    }

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <h1 className='text-center text-success'>Task Management </h1>
               
              <center>
               <Button className='btn btn-success' onClick={handleShow}>
                 Add Task
              </Button>
              </center>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='mb-6' onSubmit={handleSubmit}>
                      <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Add New Task</h2>
                      <div className="mb-4">
                          <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Task Name' className='w-full px-3 py-2 border rounded-md' />
                      </div>

                      

                      <div className="mb-4">
                          <textarea placeholder='Task Description' className='w-full px-3 py-2 border rounded-md focus:outline-none' value={description} onChange={(e)=>{setDescription(e.target.value)}}>

                          </textarea>
                      </div>

                      <div className="mb-4">
                          <select className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'
                          value={status} onChange={(e)=>setStatus(e.target.value)}>
                              <option value="ToDo">Todo</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                          </select>
                      </div>

                      <input type='submit' className='btn btn-success' value="Add Task"/>

                    </form>
                </Modal.Body>
                
              </Modal>                 

            </div>
          </div>
        </div>
       
        <TaskList/>


         <div className='card mt-2'>
                <div className="card-body">
                  <h6 className='text-center text-success'>Created By Prakash Konga </h6>
                  </div>
              </div>
      
      </div>
    </>
  )
}

export default App
