/*
Create an ES6 class, with the same name, that extends React.Component.
Add a single empty method to it called render().
Move the body of the function into the render() method.
Replace props with this.props in the render() body.
Delete the remaining empty function declaration.
*/

import React from "react";
import './ClassBasedComponent.css'
import Product from "./Product";

class classBasedComponent extends React.Component {
    render() {
        return (
            <>
                {/* <div class="login-box">
                    <p>Login</p>
                    <form>
                        <div class="user-box">
                            <input required="" name="" type="text" />
                            <label>Email</label>
                        </div>
                        <div class="user-box">
                            <input required="" name="" type="password" />
                            <label>Password</label>
                        </div>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </form>
                    <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
                </div> */}
                <div className="bg-success" style={{ height: "600px" }}>
                <Product />
                    <button className="mx-3">
                        increment +++
                    </button>
                    <button className="mx-3">
                        decrement ---
                    </button>
                </div>

            </>

        )
    }
}
export default classBasedComponent;