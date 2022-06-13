import React, { Component } from 'react'
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    };
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    })
  };

  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);
    
    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    const list = [...this.state.list];

    const updateList = list.filter(item => item.id !== id);
    this.setState({list: updateList});
  }
  render() {
    return (
      <div className="App">
        <div>
          Add and Item...
          <br/>
          <input
          type="text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button 
          onClick={()=> this.addItem()}
          > 
          Add
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button
                  onClick={() => this.deleteItem(item.id)}
                  >
                  X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default App;
//<header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>

