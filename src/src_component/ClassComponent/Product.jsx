import React, { Component } from 'react'
import './ClassBasedComponent.css'

export default class Product extends Component {
    constructor(){
        super()
        this.state = {
            cart: [],
            total: 0
        }
    }

    
    add = () => {
        this.setState({
            cart: [],
            total: this.state.total + 1
        })
    }
    remove = () => {
        this.setState({
            cart: [],
            total: this.state.total - 1
        })
       
    }

    render() {
        console.log(this.state , "state")
        return (
            <div>
                <div className="bg-success" style={{ height: "600px" }}>
                    <h2>ShoppingCart : {this.state.cart.length}</h2>
                    <h2>Total : {this.state.total}</h2>
                    <button className="mx-3" onClick={this.add}>
                        increment +++
                    </button>
                    <button className="mx-3" onClick={this.remove}>
                        decrement ---
                    </button>
                </div>
            </div>
        )
    }
}
