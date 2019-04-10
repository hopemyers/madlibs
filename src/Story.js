import React, { Component } from 'react';
import './App.css';

class Story extends Component {
// state goes here



// functions go here
view = () => {
  document.getElementById('paragraph').style.opacity = 1;
}


  render() {
    return (

      <div className="storyclass">
      <div id="storybutton"> <button id="button" onClick={this.view}> View Story </button> </div>
      <div id="paragraph" className="Story">
      <h2> &hearts; A Mad Lib Love Story &hearts;</h2>
      <p >When we first met, you looked {this.props.input1} and {this.props.input2}. I could not believe my {this.props.input3}! You smelled like {this.props.input4} and walked as gracefully as a {this.props.input5}. I could not wait to {this.props.input6} to you. <br></br> I {this.props.input7} asked you if I could have your {this.props.input8}. I could see a look of {this.props.input9} in your eyes. You hesitated for a moment, then gave me a {this.props.input10}. <br></br> I finally got to take you on our first date. I loved spending time with you. You make me {this.props.input11} so easily, like no one had before. When you touched me, I felt {this.props.input12} up my {this.props.input13}. When you looked at me, I could see {this.props.input14}. I knew we were meant to be together. <br></br> After a {this.props.input15} night, I was so {this.props.input16} to bring you home. I longed to {this.props.input17} you again. You looked at me and said, {this.props.input18} and I just knew. You {this.props.input19} me and I {this.props.input20} you. <br></br> Here we are after all this time. It feels like it has been {this.props.input21} of years! I look forward to {this.props.input22} more. You make me want to {this.props.input23} and I will {this.props.input24} you forever. Nobody else could {this.props.input25} me like you do. <br></br> {this.props.input26} yours, <br></br> Me &hearts; </p>
      </div>
      </div>
    );
  }
}
export default Story;
