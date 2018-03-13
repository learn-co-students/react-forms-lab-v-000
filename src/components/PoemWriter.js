import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }

  handleChange = (e)=> {
    this.setState({poem: e.target.value}, ()=> {this.checkValidity()});
  }

  checkValidity = ()=> {
    const poemLines = this.state.poem.split('\n') || [];
    const valid = poemLines.length === 3 && [4,2,4].every((w, i)=> {return poemLines[i].indexOf(' ') !== -1 && poemLines[i].match(/\s/g).length === w})
    this.setState({valid: valid});
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}/>
        <div id="poem-validation-error" style={{ color: "red", display: this.state.valid ? 'none' : '' }} >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
