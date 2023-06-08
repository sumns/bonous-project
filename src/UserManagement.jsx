import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  const handleDelete = id => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {state.users.map(user => (
          <li key={user.id} className='userList'>
            <span>{user.name} - {user.email}</span>
            <button onClick={() => handleDelete(user.id)} className='delete-btn' >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddUserForm = () => {
  const { dispatch } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email } = e.target.elements;
    const newUser = {
      id: Date.now(),
      name: name.value,
      email: email.value,
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
    e.target.reset();
  };

  return (
    <div className='main-container'>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className='container'>
        <input type="text" name="name" placeholder="Name" required /><br/>
        <input type="email" name="email" placeholder="Email" required /><br/>
        <button type="submit" className='addbtn'>Add</button>
      </form>
    </div>
  );
};

const UserManagement = () => {
  return (
    <div>
      <AddUserForm />
      <hr />
      <UserList />
    </div>
  );
};

export default UserManagement;
