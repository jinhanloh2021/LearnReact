import React, { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

export default function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (username, userAge) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}
