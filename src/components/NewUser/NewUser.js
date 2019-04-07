import React, { Component } from 'react';

export class NewUser extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { name, email, password, confirmPassword } = this.state
    return (
      <form className="new-user-form">
        <label>
          name:
            <input required type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          email:
            <input required type="email" name="email" value={email} onChange={this.handleChange} />
        </label>
        <label>
          password:
            <input required type="password" name="password" value={password} onChange={this.handleChange} />
        </label>
        <label>
          confirm Password:
            <input required type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
        </label>
        <button>register</button>
      </form>
    );
  }
}

export default NewUser;
