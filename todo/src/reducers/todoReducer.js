export const initialState = [
    {
        task: 'Learn about reducers',
        completed: false,
        id: new Date()
    },
]

export const reducer = (state, action) => {
    switch (action.type) {  
        case 'TOGGLE_COMPLETED':
            return state.map(task => {
                if(task.id === action.payload) {
                    return{
                        ...task,
                        completed: !task.completed
                    }
                }else {
                    return task;
                }
            })
            // return [...state, {
            //     completed: !state.completed
            // }]
            
        case 'ADD_TODOS':
            return [...state, {
               task: action.payload,
               completed: false,
               id: new Date()
            },]
        case 'CLEAR_TODOS':
            return state.filter(state => !state.completed)
            
        default: 
            return state
    }
    
}
