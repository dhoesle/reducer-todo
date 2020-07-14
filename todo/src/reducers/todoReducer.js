import {v4 as uuid} from 'uuid'
export const initialState = [
    {
        task: 'Learn about reducers',
        completed: false,
        id: new Date()
    },
]

export const reducer = (state, action) => {
    switch (action.type) {  
       case 'ADD_TODOS':
           return [...state, {
               task: action.payload,
               completed: false,
               id: new Date()
           },]
        case 'TOGGLE_COMPLETED':
           return [...state, {
               completed: true
           }]
            
        default: 
        return state
    }
    
}
