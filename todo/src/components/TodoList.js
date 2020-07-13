import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todos.map(item => (
                <Todo 
                    key={item.id} 
                    todo={item}
                    toggleTodo={props.toggleTodo}
                />
            ))}
            <button className='clear-button' onClick={props.clearPurchased}>
                Clear Completed Tasks
            </button>
        </div>

    )
}
export default TodoList;