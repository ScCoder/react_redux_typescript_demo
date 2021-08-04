import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo"


const InitialState:TodoState = {
    todos:[],
    loading:false,
    error: null
}

export const todoReducer = (state = InitialState, action:TodoAction):TodoState => {
    
    switch (action.type){
        case TodoActionTypes.FETCH_TODO:{
            return {loading:true, error:null,todos:[]}
        }
        case TodoActionTypes.FETCH_TODO_SUCCESS:{
            return {loading:false, error:null,todos:action.payload}
        }
        case TodoActionTypes.FETCH_TODO_ERROR:{
            return {loading:false, error:action.payload,todos:[]}
        }
        default:
            return state
    }
}