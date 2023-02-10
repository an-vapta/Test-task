import React, { Component } from 'react'
import './ClassBasedComponent2.css'

class ClassBasedComponent2 extends Component {
  render() {
    return (

      <div class="login-card">
        <div class="card-header">
          <div class="log">Login</div>
        </div>
        <form>
          <div class="form-group">
            <label for="username">Username:</label>
            <input required="" name="username" id="username" type="text" />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input required="" name="password" id="password" type="password" />
          </div>
          <div class="form-group">
            <input value="Login" type="submit" />
          </div>
        </form>
      </div>

    )
  }
}
export default ClassBasedComponent2;