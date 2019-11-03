import React from 'react';
import {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Output } from './components/Output';


export default class Likes extends Component{

  constructor(props){
    super(props);
    console.log(props);
    this.counter = 0;
    this.state = {count:this.counter};
  }

  increaseCounter(){
    // console.log(this);
    // console.log('before increase ',this.counter);
    this.counter++;
    this.setState({count:this.counter});
    // console.log('after increase ',this.counter);
  }

  render(){
    return(
      <div className="container">
        <h1 className="alert-primary text-center rounded p-3">Hello React World</h1>
        <h3>Click the Button to increase likes</h3>
        <button className="btn btn-success btn-lg" onClick={this.increaseCounter.bind(this)}>Click Me</button>
        <Output count={this.counter}/>
      </div>
    );
  }
}