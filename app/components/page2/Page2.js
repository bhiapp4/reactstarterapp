import React, { Component } from 'react';

export default class Page2 extends Component{
  state = {title:'Page2',txt:'This is Page2'};

  constructor(){
    super();
  }

  render(){
      return(
        <div>
          <h1>{this.state.title}</h1>
        </div>
      )
  }
}
