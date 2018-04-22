import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  validPoem = (poem) => {
    let lines = poem.split('\n');
    if (lines.length !== 3 ){
      return false
    }

    let line1 = lines[0].trim().split(' ');
    let line2 = lines[1].trim().split(' ');
    let line3 = lines[2].trim().split(' ');

    if (line1.length === 5 && line2.length === 3 && line3.length === 5){
      return true
    } else {
      return false
    }
  }

  displayError = () => {
    if (this.validPoem(this.state.content)){
      return null
    } else {
      return (
        <div id="poem-validation-error" style={{ color: "red" }}>
        This poem is not written in the right structure!
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handleChange} />
        {this.displayError()}
      </div>
    );
  }
}

export default PoemWriter;
