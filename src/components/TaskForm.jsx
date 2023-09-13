import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTask,editTask} from '../features/taskSlice'
import {v4 as uuid} from 'uuid'
import { useNavigate,useParams } from 'react-router-dom'
export const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);

  const handleChange = (e) => {
    setTask(prevTask => ({
      ...prevTask,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    if (params.id) {
      dispatch(editTask(task));
    } else {
      const newTask = {
        ...task,
        id: uuid()
      };
      dispatch(addTask(newTask));
      navigate('/');
    }
  };

  useEffect(() => {
    if (params.id) {
      const taskToEdit = tasks.find(task => task.id === params.id);
      setTask(taskToEdit);
    }
  }, [params.id, tasks]);

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
        <label htmlFor='title' className='block text-sm front-bold'>
          Title:
          <input type="text" name="title" onChange={handleChange} value={task.title}  className='w-full p-2 rounded-md bg-zinc-600'/>
        </label>
        <label htmlFor="description" className='block text-xs font-bold'>Descripcion: </label>
        <textarea name="description" placeholder="Description" onChange={handleChange} value={task.description} className='w-full p-2 rounded-md bg-zinc-600 mb-2'/>
        <button type="submit" className='bg-indigo-600 px-2 py-1 rounded-md'>Guardar</button>
      </form>
    </div>
  );
};
