import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Profiles from './components/Profiles';
import Footer from './components/Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }   
  }
 
  componentDidMount() {
    let apiURL = "./dinosaurs.json";
    fetch(apiURL)
        .then(response => response.json())
        .then(response =>
            this.setState({ data: response})
        )
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Profiles list={this.state.data}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
