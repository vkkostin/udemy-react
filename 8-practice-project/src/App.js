import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => setUsersList(prevState => [...prevState, { name, age, id: prevState.length + 1 }])

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length ? <UsersList users={usersList} /> : null}
    </>
  );
}

export default App;
