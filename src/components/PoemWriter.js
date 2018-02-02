import React from "react";

function ShowError() {
  return (
    <div id="poem-validation-error" style={{ color: "red" }}>
      This poem is not written in the right structure!
    </div>
  );
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      valid: false
    };
  }

  handleInput = e => {
    const poem = e.target.value;

    this.setState({
      value: poem
    })
    const lines = poem.split("\n")
    if (lines.length === 3 && lines[0].split(" ").length.trim === 5 && lines[1].split(" ").length.trim === 3 && lines[2].split(" ").length.trim === 5){
      this.setState({
        valid: true
      })
    } else {
      this.setState({
        valid: false
      })
    }
  }

  render() {
    const valid = this.state.valid;

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleInput}/>
        {!valid &&
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
