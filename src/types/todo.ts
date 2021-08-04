export interface TodoState{
    todos: any[];
    loading:boolean;
    error: null | string;
}

export enum TodoActionTypes{
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
}

interface FetcTodoAction{
    type:TodoActionTypes.FETCH_TODO;
}

interface FetchTodoSuccesAction{
    type:TodoActionTypes.FETCH_TODO_SUCCESS;
    payload:any[];
}

interface FetchTodoErrorAction{
    type:TodoActionTypes.FETCH_TODO_ERROR;
    payload:string;
}

export type TodoAction = FetcTodoAction | FetchTodoSuccesAction | FetchTodoErrorAction;


