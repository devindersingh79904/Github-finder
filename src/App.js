import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Layout/Navbar';
import UserItem from './Component/users/UserItem';

class App extends Component {
  render() {
    // for user expresion use { }
    // condtional
    // var name = 'devinder';
    // const loading = false;
    // const showName = true;
    // if (loading) {
    //   return <h3> loading......</h3>;
    // }

    return (
      <div className='App'>
        <Navbar />
        <UserItem />

        {/* <h1>my App</h1> */}

        {/* {loading ? <h4>loading......</h4> : <h2>hello {showName && name}</h2>} */}
      </div>
    );
  }
}

export default App;
