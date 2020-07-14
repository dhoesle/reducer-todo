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
           return [...initialState, {
               task: action.payload,
               completed: false,
               id: new Date()
           }]
        default: 
           return state
    }
}