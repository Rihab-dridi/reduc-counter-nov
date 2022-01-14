import { DECREMENT, INCREMENT, RESET } from "./action-type"


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

        case DECREMENT:return{
            ...state, 
            counter: state.counter>0?state.counter-1  : state.counter
        }
    
        case RESET: return {
            ...state, 
            counter: state.counter=0
        }
        default: return state
          
    }
}

