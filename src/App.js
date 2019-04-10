import React, { Component } from 'react';
import './App.css';
import Story from './Story.js'

class App extends Component {
// state goes here
constructor(props){
  super(props)
  this.state = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: "",
    input12: "",
    input13: "",
    input14: "",
    input15: "",
    input16: "",
    input17: "",
    input18: "",
    input19: "",
    input20: "",
    input21: "",
    input22: "",
    input23: "",
    input24: "",
    input25: "",
    input26: "",
    hidden: true,
  }
}

// functions go here
handleInput1 = (event) => {
  console.log(event.target.value)
  this.setState({input1: event.target.value});
}
handleInput2 = (event) => {
  console.log(event.target.value)
  this.setState({input2: event.target.value});
}
handleInput3 = (event) => {
  console.log(event.target.value)
  this.setState({input3: event.target.value});
}
handleInput4 = (event) => {
  console.log(event.target.value)
  this.setState({input4: event.target.value});
}
handleInput5 = (event) => {
  console.log(event.target.value)
  this.setState({input5: event.target.value});
}
handleInput6 = (event) => {
  console.log(event.target.value)
  this.setState({input6: event.target.value});
}
handleInput7 = (event) => {
  console.log(event.target.value)
  this.setState({input7: event.target.value});
}
handleInput8 = (event) => {
  console.log(event.target.value)
  this.setState({input8: event.target.value});
}
handleInput9 = (event) => {
  console.log(event.target.value)
  this.setState({input9: event.target.value});
}
handleInput10 = (event) => {
  console.log(event.target.value)
  this.setState({input10: event.target.value});
}
handleInput11 = (event) => {
  console.log(event.target.value)
  this.setState({input11: event.target.value});
}
handleInput12 = (event) => {
  console.log(event.target.value)
  this.setState({input12: event.target.value});
}
handleInput13 = (event) => {
  console.log(event.target.value)
  this.setState({input13: event.target.value});
}
handleInput14 = (event) => {
  console.log(event.target.value)
  this.setState({input14: event.target.value});
}
handleInput15 = (event) => {
  console.log(event.target.value)
  this.setState({input15: event.target.value});
}
handleInput16 = (event) => {
  console.log(event.target.value)
  this.setState({input16: event.target.value});
}
handleInput17 = (event) => {
  console.log(event.target.value)
  this.setState({input17: event.target.value});
}
handleInput18 = (event) => {
  console.log(event.target.value)
  this.setState({input18: event.target.value});
}
handleInput19 = (event) => {
  console.log(event.target.value)
  this.setState({input19: event.target.value});
}
handleInput20 = (event) => {
  console.log(event.target.value)
  this.setState({input20: event.target.value});
}
handleInput21 = (event) => {
  console.log(event.target.value)
  this.setState({input21: event.target.value});
}
handleInput22 = (event) => {
  console.log(event.target.value)
  this.setState({input22: event.target.value});
}
handleInput23 = (event) => {
  console.log(event.target.value)
  this.setState({input23: event.target.value});
}
handleInput24 = (event) => {
  console.log(event.target.value)
  this.setState({input24: event.target.value});
}
handleInput25 = (event) => {
  console.log(event.target.value)
  this.setState({input25: event.target.value});
}
handleInput26 = (event) => {
  console.log(event.target.value)
  this.setState({input26: event.target.value});
}
view = () => {
  this.setState({hidden: false})
}


  render() {
    return (
      <div className="App">
      <div id="title"> Mad Libs </div>
        <div className="words">
        <input id="input1" onChange={this.handleInput1} placeholder="Adjective..."></input>
        <input id="input2" onChange={this.handleInput2} placeholder="Adjective..."></input>
        <input id="input3" onChange={this.handleInput3} placeholder="Part of the body..."></input>
        <input id="input4" onChange={this.handleInput4} placeholder="Noun..."></input>
        <input id="input5" onChange={this.handleInput5} placeholder="Animal..."></input>
        <input id="input6" onChange={this.handleInput6} placeholder="Verb..."></input>
        <input id="input7" onChange={this.handleInput7} placeholder="Adverb..."></input>
        <input id="input8" onChange={this.handleInput8} placeholder="Noun..."></input>
        <input id="input9" onChange={this.handleInput9} placeholder="Adjective..."></input>
        <input id="input10" onChange={this.handleInput10} placeholder="Noun..."></input>
        <input id="input11" onChange={this.handleInput11} placeholder="Verb..."></input>
        <input id="input12" onChange={this.handleInput12} placeholder="Noun..."></input>
        <input id="input13" onChange={this.handleInput13} placeholder="Part of the body..."></input>
        <input id="input14" onChange={this.handleInput14} placeholder="Noun..."></input>
        <input id="input15" onChange={this.handleInput15} placeholder="Adjective..."></input>
        <input id="input16" onChange={this.handleInput16} placeholder="Verb..."></input>
        <input id="input17" onChange={this.handleInput17} placeholder="Verb..."></input>
        <input id="input18" onChange={this.handleInput18} placeholder="Exclamation..."></input>
        <input id="input19" onChange={this.handleInput19} placeholder="Past tense verb..."></input>
        <input id="input20" onChange={this.handleInput20} placeholder="Past tense verb..."></input>
        <input id="input21" onChange={this.handleInput21} placeholder="Number..."></input>
        <input id="input22" onChange={this.handleInput22} placeholder="Number..."></input>
        <input id="input23" onChange={this.handleInput23} placeholder="Verb..."></input>
        <input id="input24" onChange={this.handleInput24} placeholder="Verb..."></input>
        <input id="input25" onChange={this.handleInput25} placeholder="Verb..."></input>
        <input id="input26" onChange={this.handleInput26} placeholder="Adverb..."></input>
        </div>

        <Story
        input1={this.state.input1}
        input2={this.state.input2}
        input3={this.state.input3}
        input4={this.state.input4}
        input5={this.state.input5}
        input6={this.state.input6}
        input7={this.state.input7}
        input8={this.state.input8}
        input9={this.state.input9}
        input10={this.state.input10}
        input11={this.state.input11}
        input12={this.state.input12}
        input13={this.state.input13}
        input14={this.state.input14}
        input15={this.state.input15}
        input16={this.state.input16}
        input17={this.state.input17}
        input18={this.state.input18}
        input19={this.state.input19}
        input20={this.state.input20}
        input21={this.state.input21}
        input22={this.state.input22}
        input23={this.state.input23}
        input24={this.state.input24}
        input25={this.state.input25}
        input26={this.state.input26}
        hidden={this.state.hidden}
        ></Story>
      </div>
    );
  }
}

export default App;
