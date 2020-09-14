import React, {Component} from 'react';
import './App.css';



class App extends Component {

  constructor(){
    super()

    this.state = {
      heroes : [
        {
          name: "Thor",
          key:1
        },
        {
          name: "Hulk",
          key:1
        },
        {
          name: "Black Panther",
          key:1
        },

      ]
    }  
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
  }

  render(){
    return (
      <div className="App">
      {this.state.heroes.map(heroes => <h1 key={heroes.key}>{heroes.name}</h1>)}
    </div>
    );
  }
}

export default App;
