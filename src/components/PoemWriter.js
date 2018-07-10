import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      error: '<div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>'
    };
    this.poemLines = [];

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event){
    this.setState({ value: event.target.value });

    this.poemLines = event.target.value.split('\n');
    if ( this.poemLines.length === 3 &&
         this.poemLines[0].trim().split(' ').length === 5 &&
         this.poemLines[1].trim().split(' ').length === 3 &&
         this.poemLines[2].trim().split(' ').length === 5 ){
      this.setState({ error: '' });
    } else {
      this.setState({ error: '<div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>' });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleOnChange}></textarea>
        {this.state.error}
      </div>
    );
  }
}

export default PoemWriter;
