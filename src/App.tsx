import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>USERS:</h1>
      <UserList/>
      <h1>TODOS:</h1>
      <TodoList/>
    </div>
  )
}


export default App;
