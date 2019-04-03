import React, { Component } from 'react';

class NewUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword } = this.state
    return (
      <form className="new-user-form">
        <label>
          First Name:
            <input type="text" name="firstName" value={firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
            <input type="text" name="lastName" value={lastName} onChange={this.handleChange} />
        </label>
        <label>
          email:
            <input type="text" name="email" value={email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
            <input type="text" name="password" value={password} onChange={this.handleChange} />
        </label>
        <label>
          Confirm Password:
            <input type="text" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default NewUser;
