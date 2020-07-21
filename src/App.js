import React from 'react';
import Profile from './components/Profile';
import user from './user.json';
import './App.css';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />{' '}
    </>
  );
}

export default App;
