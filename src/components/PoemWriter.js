import React from "react";

const followsRules = poem => {
   const strippedLines = poem.split("\n").map(line => line.trim())
   if (poem && strippedLines.length === 3) {
      return (
        strippedLines[0].split(" ").length === 5 &&
        strippedLines[1].split(" ").length === 3 &&
        strippedLines[2].split(" ").length === 5
      );
    } else {
      return false;
    }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isPoem: true,
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      isPoem: followsRules(event.target.value)
    });
  }

  render() {
    // const display = this.followedRules ? 'block' : 'none';

    return (
      <div>
        <textarea id="textarea" rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {!this.state.isPoem ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
