import React, { Component } from 'react';

export class SignIn extends Component {
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
    const { newUser } = this.props
    return (
      <form className="sign-in-form">
        <div>
          <label>
            email
            <input type="text" name="email" value={email} onChange={this.handleChange} />
          </label>
          <label>
            password
            <input type="text" name="password" value={password} onChange={this.handleChange} />
          </label>
        </div>
        <button className="sign-in-btn">sign in</button>
        <button onClick={newUser} className='create-account-btn'>create account</button>
      </form>
    );
  }
}

export default SignIn;
