import { Component } from 'react'
import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

// function App() {
//   return (
//     <div>
//       <Users />
//     </div>
//   );
// }

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];


class App extends Component {
  render() {
    return (
      <UsersContext.Provider value={{users: DUMMY_USERS}}>
        <UserFinder />
      </UsersContext.Provider>
    );
  }
}

// function App() {
//   const usersContext = {
//     users: DUMMY_USERS
//   }

//   return (
//     <UsersContext.Provider value={usersContext}>
//       <UserFinder />
//     </UsersContext.Provider>
//   );
// }

export default App;
