import React, { Component }from 'react';
import './App.css';
import axios from "axios";
import Navbar from "./components/Navbar";
import DisplayData from "./components/DisplayData"


class App extends Component {

  state = {
    players: []
  };
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then((res) => {
      this.setState({
          players: res.data
        });
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <DisplayData players={this.state.players}/>
      </div>
    );
  }
}

export default App;
