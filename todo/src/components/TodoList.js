import React, { useState, useReducer} from 'react';
import { initialState, reducer } from '../reducers/todoReducer'

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTodoText, setNewTodoText] = useState('')
    console.log("TodoList -> state", state)
 

    const handleChanges = event => {
        event.preventDefault();
        setNewTodoText(event.target.value)
    }

    const addTodo = event  => {
        event.preventDefault()
        dispatch({ type: 'ADD_TODOS', payload: newTodoText})
        console.log("TodoList -> newTodoText", newTodoText)
        setNewTodoText('')
    }

    const clearCompleted = event => {
        event.preventDefault()
        dispatch({ type: 'CLEAR_TODOS'})

    }

    return (
        <div className='todo-list'>
            <form onSubmit={addTodo}>
                <input 
                    type='text' 
                    name='item' 
                    value={newTodoText} 
                    onChange={handleChanges}
                    placeholder='add a task here'
                />
                <label>Urgent
                        <input
                            name='stress'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.medical.stress}
                            
                        />
                    </label>
                <button
                    className='add-button'  
                >
                    Add to List
                </button>

            </form>
            {state.todos.map(item => (
                    <div
                        className={`todo${item.completed ? ' completed' : ''}`}
                        onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id })}
                    >
                        <p>{item.item}</p>
                    </div>
            ))}

            <button
                className='clear-button'
                onClick={clearCompleted}
            >
               Clear Completed Tasks
            </button>
            
            
        </div>
    )

}
export default TodoList