import { INCREMENT } from "./action-type"


//global objects of global states 
const initialState={
    counter:5,
    timer:0
}


//reducer 
 

export const couterReducer=(state=initialState,action )=>{
    switch (action.type) {
     
        case INCREMENT: return{
            ...state,
            counter:state.counter+1   //the updated counter= the current counter+1 
        }
    
        default: return state
          
    }
}

