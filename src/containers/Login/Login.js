import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <form className="sign-in-form">
        <label>
          email:
            <input type="text" name="email" value={email} onChange={this.handleChange}/>
        </label>
        <label>
          Password:
            <input type="text" name="password" value={password} onChange={this.handleChange}/>
        </label>
        <button>Sign In</button>
      </form>
    );
  }
}

export default Login;
