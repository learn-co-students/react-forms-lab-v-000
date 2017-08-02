import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }

  countWords(line) {
    return line.split(' ').filter(l => l).length;
  }

  isValidPoem(poem) {
    const poemLines = poem.split('\n').filter(l => l);
    const isRightAmountOfLines = poemLines.length === 3;
    const hasRightAmountOfWords = this.countWords(poemLines[0]) === 5 && this.countWords(poemLines[1]) === 3 && this.countWords(poemLines[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords;
  }

  // isValidPoem = (content) => {
  //
  //   var lines = content.split("\n");
  //   if (lines.length === 3){
  //     var line1 = lines[0].split(/\s+/).length === 5;
  //     var line2 = lines[1].split(/\s+/).length === 3;
  //     var line3 = lines[2].split(/\s+/).length === 5;
  //     if(line1 && line2 && line3){
  //       // console.log("TRUE")
  //       return true;
  //     }
  //   }
  //
  //   // console.log(lines)
  //   return false;
  // }

  handleChange = event => {

    const content = event.target.value;

    if (content) {
      this.setState({
        value: content,
        isValid: this.isValidPoem(content),
      });
    }
    // this.setState({
    //   value: event.target.value,
    //   isValid: this.isValidPoem(event.target.value)
    // });
  }



  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.value}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

export default PoemWriter;
