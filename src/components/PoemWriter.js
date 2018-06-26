import React from "react";

// const ValidPoem = poem =>{
//   let firstRow
//   let secondRow
//   let thirdRow
//   let rows = poems.split(/\r?\n/)
// }
class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poemText: '',
      poemValid: false
    };
    this.poemValidator = this.poemValidator.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  poemValidator = () => {
    let poem = this.state.poemText
    let poemLength = poem.split(/\s+/)

    if (poemLength.length === 14) {
      return ""
    } else {
      return <div id="poem-validation-error">This poem is not written in the right structure!</div>
    }
  };

    handleChange = event => {
      this.setState({
        poemText: event.target.value})
    }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" name="poemText" onChange={this.handleChange} value={this.state.poemText}/>
        {this.poemValidator()}
      </div>
    );
  }
}

export default PoemWriter;
