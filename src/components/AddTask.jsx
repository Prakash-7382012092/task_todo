import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/taskSlice';
import { v4 as uuidv4 } from 'uuid';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const AddTask = () => {
   const tasks = useSelector((state)=>state.tasks.tasks);
   console.log(tasks);
   console.log(tasks.length);
    const dispatch = useDispatch();
    const [title,setTitle]  = useState('');
     const [show, setShow] = useState(false);
    const [description,setDescription]= useState('');
    const [status,setStatus] = useState('');
      const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleSubmit = (e)=>{
        e.preventDefault();     
        dispatch(addTask({id:tasks.length+1,title,description,status}));        
        setTitle('');
        setDescription('');
        setStatus('To Do');
        setShow(false);
        handleClose();
    }
  return (
    <div>
      
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
    </div>
  )
}

export default AddTask
