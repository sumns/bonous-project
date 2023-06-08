import React from 'react';
import './App.css'
import UserManagement from './UserManagement';
import { UserProvider } from './UserContext';

function App() {


  return (
    <>
    <UserProvider>
      <UserManagement />
    </UserProvider>
    </>
  )
}

export default App
