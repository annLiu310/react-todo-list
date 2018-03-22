import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={//constructor
    todoListItems :[//JSON
      {
        id: 1,
        name: 'shoe'
      },
      {
        id: 2,
        name: 'dress'
      },
      {
        id: 3,
        name: 'rest'
      }
    ]
  }

  deleteItem = (itemToDelete) => {
    this.state.todoListItems=this.state.todoListItems.filter(item=>item.id!=itemToDelete.id); //use filter to delete
    this.setState({ todotodoListItems: this.state.todoListItems });//re-set state
  }

  render() {
    return (
      <div className='App'>
        <ul>
          {
            this.state.todoListItems.map(item => {
              return <li key={item.id}>
                id:{item.id}--{item.name}
                <button onClick={()=>this.deleteItem(item)}>delete</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
