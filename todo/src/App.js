import React from 'react';
import Todo from './components/TodoList'

import './App.css';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className='App'>
      <div className='Header'>
        <h2>Welcome to your Todo App!</h2>
      </div>
      
      <TodoList />
    
     
    </div>
  );
}

export default App;
