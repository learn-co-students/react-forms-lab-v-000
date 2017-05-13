import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',  
      isValid: false, 
    };

    this.handlePoemChange = this.handlePoemChange.bind(this); 
    this.validatePoem = this.validatePoem.bind(this); 
  }

  handlePoemChange(event) {
    const poem = event.target.value; 

    if (poem) {
      this.setState({
        poem: poem,  
        isValid: this.validatePoem(poem), 
      });  
    } 
  }
 
  validatePoem(poem) {
    //poem has three lines
    //discount spaces at beginning and end of line
    var poemLines = poem.split('\n'); 

    if (poemLines.length !== 3) {
      return false;  
    }

    //first line 5 words
    var lineOne = poemLines[0].split(" ").filter(l => l); 
    if (lineOne.length != 5) {
      return false;  
    }

    //second line 3 words
    var lineTwo = poemLines[1].split(" ").filter(l => l); 
    if (lineTwo.length != 3) {
      return false;  
    }
    //third line 5 words
    var lineThree = poemLines[2].split(" ").filter(l => l); 
    if (lineThree.length != 5) {
      return false;  
    }

    return true; 
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handlePoemChange} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null } 
      </div>
    );
  }
}

