import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './Img'

class App extends Component{
  render(){
    return (
    <div className="App">
      <Img url = {'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD8aNW-fZPcBFUMxC_RzeD68ffr3FW134KdvzrOLm18x4q8opz&usqp=CAU'}/>
    </div>
    );
  }
}

export default App;
