import React from "react";

const validatePoem = poem => {
  const lines = poem.split("\n").map(line => line.trim());
  if (lines.length === 3 && lines[0].match(/[" "]/gi).length === 4 && lines[1].match(/[" "]/gi).length === 2 && lines[2].match(/[" "]/gi).length === 4) {
    return true
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: true,
    };
  }

  handleChange = event => {
    const content = event.target.value
    this.setState({
      value: content,
      isValid: validatePoem(content)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        { !this.state.isValid ? (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure! 
        </div>) : null }
      </div>
    );
  }
}

export default PoemWriter;
