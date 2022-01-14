import { DECREMENT, INCREMENT, RESET } from "./action-type"


export const incrementHandler=()=>{
    return{
        type:INCREMENT
    }
}

export const DecrementHandler=()=>{
    return {
        type:DECREMENT
    }
}
export const resetHandler=()=>{
    return {
        type:RESET
    }
}