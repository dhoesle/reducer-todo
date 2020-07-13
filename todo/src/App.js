import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <h2>Welcome to your Todo App!</h2>
      </div>
      <TodoList
        // todos={this.state.todos}
        // toggleTodo={this.toggleTodo}
        // clearPurchased={this.clearPurchased}
      />
      <TodoForm 
        // addTodo={this.addTodo}
      />
    </div>
  );
}

export default App;
