/*
 * Components must return a single root element. If elements are many, enclose them in a div
 *
 * A component must never modify its own props. Consider this sum function:
    function sum(a, b) {
      return a + b;
    }
 * it is a pure function, does not attempt to change its input
 * In contrast, this function is impure because it changes its own input:
    function withdraw(account, amount) {
      account.total -= amount;
    }
 * React is pretty flexible but it has a single strict rule: All React components must act like pure functions with respect to their props.
 *  
 */
import React, { Component } from 'react';
import './App.css';
import JSXIntro from './JSXIntro';
import WelcomePeople from './Elements';
import Clock from './UpdateUI';
import Toggle from './Events';
import Argument from './EventsArgument';
import LoginControl from './LoginControl';
import MailBox from './Mailbox';
import ListItems from './ListComponents';
import ReservationForm from './Forms';

class App extends Component {
  render() {
    const messages = ['Hello', 'World'];
    const numbers =[1,2];
    return (
      <div className="App">
        <JSXIntro />
        <WelcomePeople />
        <Clock />
        <Toggle />
        <Argument />
        <LoginControl />
        <MailBox unreadMessages={ messages }/>
        <ListItems numbers={ numbers }/>
        <ReservationForm />
      </div>
    );
  }
}

export default App;
