import React, { useState, useReducer} from 'react';
import { initialState, reducer } from '../reducers/todoReducer'
import Todo from './Todo'

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);

    return (
        <div className='todo-list'>
            {state.map(item => (
                <Todo
                    key={item.id}
                    todo={item}
                    toggleTodo={state.toggleTodo}
                />
            ))}
            <button className='clear-button' onClick={state.clearPurchased}>
                Clear Completed Tasks
            </button>
            
            
        </div>
    )

}
export default TodoList