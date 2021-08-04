import axios from "axios"
import { Dispatch } from "redux"
import { TodoAction, TodoActionTypes } from "../../types/todo"


export const fetchTodos = () =>{
    return async (dispatch: Dispatch<TodoAction> ) => {
        try
        {
            dispatch({type:TodoActionTypes.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch({type:TodoActionTypes.FETCH_TODO_SUCCESS,payload:response.data})

        }
        catch(e){
            dispatch({type:TodoActionTypes.FETCH_TODO_ERROR,payload:'Ошибка при загрузке todo'})

        }
    }
}