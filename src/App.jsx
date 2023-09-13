import { useSelector } from 'react-redux'
import './App.css'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import { TaskForm } from './components/TaskForm'
import  {TasksList}  from './components/TasksList'

function App() {


 const tasksState = useSelector(state => state.tasks)

 console.log(tasksState)

  return (
    <>    
    <div className='bg-zinc-900 h-screen text-white'>
     <div className='flex items-center justify-center h-full'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>        
          <Route path='/edit-task/:id' element={<TaskForm/>}/>        
        </Routes>
      </BrowserRouter>
     </div>
    </div>
    </>
  )
}

export default App