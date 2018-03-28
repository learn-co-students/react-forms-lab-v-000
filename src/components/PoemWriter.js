import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: ''
    };
  }

  handleTextChange = (e) => {

    let lines = e.target.value.split('\n');

    let firstLineWords = (lines[0]) ? lines[0].trim().split(' ').length : 0;
    let secondLineWords = (lines[1]) ? lines[1].trim().split(' ').length : 0;
    let thirdLineWords = (lines[2]) ? lines[2].trim().split(' ').length : 0;

    let error = (lines.length === 3 && firstLineWords === 5 && secondLineWords === 3 && thirdLineWords === 5)

    this.setState({
      value: e.target.value,
      valid: error
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleTextChange} value={this.state.value} />
        { !this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null }
      </div>
    );
  }
}

export default PoemWriter;
