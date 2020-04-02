import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Layout/Navbar';
// import UserItem from './Component/users/UserItem';
import Users from './Component/users/Users';
import axios from 'axios';
import Search from './Component/users/Search';
import Alert from './Component/Layout/Alert';
import About from './Component/pages/About';
import User from './Component/users/User';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlertState] = useState(null);
  const [repos, setRepo] = useState([]);

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });

  //   this.state.users = res.data;
  // }

  const searchUser = async text => {
    setLoading({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  const clearData = () => {
    setUsers([]);
    setLoading(false);
  };

  // Getuser aa

  const getUser = async userName => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);

    setUser(res.data);
    setLoading(false);
  };

  const getUserRepo = async userName => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);

    setRepo(res.data);
    setLoading(false);
  };

  const setAlert = (msg, type) => {
    setAlertState({ msg, type });

    setTimeout(() => setAlertState(null), 3000);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />

          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUser}
                    clearData={clearData}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />

            <Route
              exact
              path='/user/:login'
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepo={getUserRepo}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
