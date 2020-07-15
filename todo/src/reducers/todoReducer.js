export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    },
]

export const reducer = (state = initialState, action) => {
    switch (action.type) {  
        case 'TOGGLE_COMPLETED':
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                      ...item,
                      completed: !item.completed
                    }
                  }
                  return item;
            })  
        case 'ADD_TODOS':
            return [...state, {
               item: action.payload,
               completed: false,
               id: new Date()
            },]
        case 'CLEAR_TODOS':
            return state.filter(state => !state.completed)
            
        default: 
            return state
    }
    
}
