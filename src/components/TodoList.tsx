import React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchTodos } from "../store/action-creators/todo"



const TodoList: React.FC = () =>{

    const {todos,loading,error} = useTypedSelector(state => state.todo)

    const dispatch = useDispatch()

    useEffect( ()=>
    {
        dispatch(fetchTodos())

    },[])

    if (loading){
        return <h1>Идет загрузка</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div>
         {todos.map( todo =>

         <div key = {todo.id} >{todo.title}</div>

            )}
        </div>
    )

}

export default TodoList