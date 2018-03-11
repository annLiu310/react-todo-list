import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const todoListItems = [
      {
        id: 1,
        name: "Eat",
      },
      {
        id: 1,
        name: "play",
      },
      {
        id: 1,
        name: "Sleep",
      }
    ]
    return (
      <div className="App">
        <ul>
          {
            todoListItems.map(item => {
              return <li> {item.name} </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
