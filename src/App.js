import React, { Component } from "react";
import store from './store/configureStore';
import { withdrawMoney } from './actions/expenses';
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";

class App extends Component {
  
  handleWithdrawMoney = (e) => {
    const amount = e.target.dataset.amount;
    store.dispatch(withdrawMoney(amount));
  }

  render() {
    const { username, totalAmount } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={this.handleWithdrawMoney} data-amount="10000">WITHDRAW $10,000</button>
          <button onClick={this.handleWithdrawMoney} data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
