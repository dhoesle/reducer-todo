import React, { useState, useReducer} from 'react';
import { initialState, reducer } from '../reducers/todoReducer'

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTodoText, setNewTodoText] = useState('')
    console.log(state);
    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleChanges = event => {
        event.preventDefault();
        setNewTodoText(event.target.value)
    }

    const addTodo = event  => {
        event.preventDefault()
        dispatch({ type: 'ADD_TODOS', payload: newTodoText})
    }

    const toggleCompleted = (taskId) => {
        dispatch({ type: 'TOGGLE_COMPLETED', payload: taskId })
    }

    const clearCompleted = event => {
        event.preventDefault()
        dispatch({ type: 'CLEAR_TODOS'})

    }

    return (
        <div className='todo-list'>
            {state.map(item => (
                    <div
                        className={`todo${item.completed ? ' completed' : ''}`}
                        onClick={toggleCompleted}
                    >
                        <p>{item.task}</p>
                    </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='task' 
                    value={newTodoText} 
                    onChange={handleChanges}
                />
                <button  
                    onClick={addTodo}
                >
                    Add to List
                </button>

            </form>

            <button
                onClick={clearCompleted}
            >
                Clean up List
            </button>
            
            
        </div>
    )

}
export default TodoList