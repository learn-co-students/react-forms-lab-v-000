import React from "react";

// const validPoem = poem => {
//    const lines = poem.split("\n").filter(l => l).length
//    const wordlines = poem.split("\n").filter(l => l)
//    if (lines === 3) {
//       return (
//       wordlines[0].split(" ").length === 5 &&
//       wordlines[1].split(" ").length === 3 &&
//       wordlines[2].split(" ").length === 5)}
    
//   }



class PoemWriter extends React.Component {
  
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }

  handleChange = e => {
    const value = e.target.value
    this.setState({
      poem: value,
      valid: this.validPoem(value)
      
    })
  }


  validPoem(poem)  {
   const lines = poem.split("\n").filter(l => l).length
   const wordlines = poem.split("\n").filter(l => l)
   if (lines === 3) {
      return (
      this.wordCount(wordlines[0]) === 5 &&
      this.wordCount(wordlines[1]) === 3 &&
      this.wordCount(wordlines[2]) === 5)}
    
  }

  wordCount(words) {
    return words.split(' ').filter(w => w).length
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
        {this.state.valid ? null :
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
