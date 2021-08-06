import React from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../store'
import  _ from 'lodash'
import Fetch from '../Fetch';

function App() {
  const { contacts, user, activeUserId  } = store.getState();
  
  return (
    <div className="App">
      {/* <Sidebar contacts={_.values(contacts)}></Sidebar>
      <Main user={user} activeUserId={activeUserId}></Main> */}
      <Fetch></Fetch>
    </div>
  );
}

export default App;
