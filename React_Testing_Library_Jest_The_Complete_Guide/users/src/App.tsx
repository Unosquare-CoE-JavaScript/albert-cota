import { useState } from 'react';
import './App.css';

import UserForm from './components/UserForm';
import UserList from './components/UserList';

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  interface OnUserAdd {
    (user: { name: string; email: string }): void;
  }

  const onUserAdd: OnUserAdd = (user) => {
    const newUser: User = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </div>
  );
}

export default App;
