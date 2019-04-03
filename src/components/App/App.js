import React, { Component } from 'react';
import Login from '../Login/Login'
import NewUser from '../NewUser/NewUser'
import Ratings from '../Ratings/Ratings'
import Stats from '../Stats/Stats'
import Home from '../Home/Home'
import './App.scss';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'



class App extends Component {
  state = {
    user: [1],
    filter: 'home'
  }

  changeFilter = (filter) => {
    this.setState({ filter })
  }

  componentToDisplay = () => {
    const { filter } = this.state
    switch (filter) {
      case 'ratings':
        return <Ratings changeFilter={this.changeFilter} />
      default:
        return <Home changeFilter={this.changeFilter} />
    }
  }

  render() {
    const { user } = this.state
    return (
      <div className="App">
        <h1>habit golf</h1>
        {
          user.length === 0 ? <Login /> : this.componentToDisplay()
        }
      </div>
    );
  }
}

export default App;
