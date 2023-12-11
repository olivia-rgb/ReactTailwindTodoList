import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import TodoStats from './TodoStats';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Write some code', completed: false },
    { id: 2, text: 'Read a book', completed: false },
    { id: 3, text: 'Cook spaghetti', completed: false },
    { id: 4, text: 'Buy groceries', completed: false },
    { id: 5, text: 'Teach Tom Maths', completed: false },
    { id: 6, text: 'Do my assignments', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState(''); 

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const handleEditStart = (taskId, currentText) => {
    setEditingTaskId(taskId);
    setEditedTaskText(currentText);
  };

  const handleEditSave = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskId ? { ...t, text: editedTaskText } : t
      )
    );
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  const handleEditCancel = () => {
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className=''>

      <div className='flex gap-3'>
        <input
          type="text"
          value={newTask}
          placeholder='Enter a Todo'
          onChange={(e) => setNewTask(e.target.value)}
          className="w-10/12 p-4 border-2 bg-black text-white border-blue-400  font-semibold rounded mb-4"
        />
        <button
          onClick={addTask}
          className="bg-blue-400 text-white inline-block font-semibold h-14 rounded w-2/12"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className='flex  mb-2 border-4 font-semibold   rounded'>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                  onBlur={() => handleEditSave(task.id)} 
                  autoFocus
                />
              </div>
            ) : (
              <div className={`flex items-center text-purple-950 w-full ${task.completed ? 'line-through text-gray-500' : ''}`}>
               <span className={`flex items-center w-full ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.text}
                </span>
                
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                  className="mr-2 cursor-pointer "
                />
                <button onClick={() => handleEditStart(task.id, task.text)}>
                  <FaEdit className='text-purple-500' />
                </button>

                <button onClick={() => handleDelete(task.id)}>
                  <FaTrash className='text-blue-400' />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
        <div className=' flex justify-between font-bold'>
        <h3>Todo Completed: {tasks.filter((task) => task.completed).length}</h3>
        <h3>Todo Remaining: {tasks.filter((task) => !task.completed).length}</h3>
      </div>
    </div>
  );
}

export default TodoList;
