import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      hasError: false,
    };
  }

  handleChange = (event) => {
    let val = event.target.value;
    this.setState({ value: val })

    let lines = val.split("\n");

    let correctNumLines = lines.length === 3;
    if (!correctNumLines) {
      this.setState({
        hasError: true,
      })
      return
    }

    let correctFirstLine = lines[0].trim().split(" ").length === 5;
    let correctSecLine = lines[1].trim().split(" ").length === 3;
    let correctThirdLine = lines[2].trim().split(" ").length === 5;

    if (!correctFirstLine || !correctSecLine || !correctThirdLine) {
      this.setState({
        hasError: true,
      })
    } else {
      this.setState({
        hasError: false,
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange} />
        {this.state.hasError
          ? (
            <div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>
          ) : (null)}
      </div>
    );
  }
}

export default PoemWriter;
