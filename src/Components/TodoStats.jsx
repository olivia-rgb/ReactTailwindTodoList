import React from 'react';

function TodoStats({ tasks }) {
  // Check if tasks is an array before using filter
  const completedTodos = Array.isArray(tasks) ? tasks.filter((task) => task.completed).length : 0;
  const remainingTodos = Array.isArray(tasks) ? tasks.length - completedTodos : 0;

  return (
    <div>
      <div className="feedback-stats">
        <h4> I have a total of {Array.isArray(tasks) ? tasks.length : 0} Todos</h4>
        <h4>Todo Completed: {completedTodos}</h4>
        <h4>Todo Remaining: {remainingTodos}</h4>
      </div>
    </div>
  );
}

export default TodoStats;
