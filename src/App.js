import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import FlightResult from './components/FlightsResult';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      data:""
    }
  }

  formChildSearch(params) {
  this.setState({
    data : params
  })
}
  render() {
    return (
      <div className="app">
        <Header/>
        <section className="app__content">
        <Search callback={this.formChildSearch.bind(this)}/>
        <FlightResult data={this.state.data}/>
        </section>
      </div>
    );
  }
}

export default App;
