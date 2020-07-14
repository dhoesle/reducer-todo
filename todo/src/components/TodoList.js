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
        setNewTodoText(event.target.value)
    }

    return (
        <div className='todo-list'>
            {state.map(item => (
                    <div
                        className={`todo${item.completed ? ' completed' : ''}`}
                        onClick={() => dispatch({ type: 'TOGGLE_COMPLETED'})}
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
                    onClick={() => dispatch({ type: 'ADD_TODOS', payload: newTodoText})}
                >
                    Add to List
                </button>

            </form>
            
            
        </div>
    )

}
export default TodoList