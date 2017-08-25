import React, { Component } from 'react';

export default class Page1 extends Component{
  state = {title:'Page1', txt:'Hello I am Page 1..'};

  constructor(){
    super();
  }

  render(){
    return(
      <div className="page1">
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}
