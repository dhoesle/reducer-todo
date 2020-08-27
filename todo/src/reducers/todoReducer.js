export const initialState = {
    todos: [
        {
            item: 'Click a task to cross it off the list',
            completed: false,
            id: Date.now()
        },
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {  
        case 'ADD_TODOS':
            console.log('action.text', action)
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { item: action.payload, id: Date.now(), completed: false}
                ],
            }

        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                    return item;
            })  }
        case 'CLEAR_TODOS':
            return state.filter(state => !state.completed)
        default: 
            return state
    }
}
