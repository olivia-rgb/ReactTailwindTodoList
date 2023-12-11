import React from 'react'
import  TodoList from './TodoList'

function App() {
  return (
    <div className=' bg-blue-400 h-screen flex justify-center items-center'>
        <div className='w-full max-w-md p-4 bg-white rounded-lg shadow-md text-center'>
            <div className='py-3'>
                <h1 className=' font-bold text-3xl'>Todo-List</h1>
                <p className= 'font-bold'>What's the plan for today?</p>
            </div>
            <TodoList />
        </div>
    </div>
  )
}

export default App