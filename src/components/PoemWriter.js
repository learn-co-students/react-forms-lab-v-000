import React from "react";

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  countWords = (str) => {
    if (!str) {
      return 0;
    }

    return str.trim().split(" ").length;
  }

  hasNumberOfWords = (str, number) => {
    return this.countWords(str) === number;
  }

  isValid = () => {
    const lines = this.state.value.split('\n');
    const hasThreesLines = lines.length === 3;

    const firstHasFiveWords = this.hasNumberOfWords(lines[0], 5);
    const secondLineHasThreeWords = this.hasNumberOfWords(lines[1], 3);
    const thirdLineHasFiveWords = this.hasNumberOfWords(lines[2], 5);

    return hasThreesLines && firstHasFiveWords && secondLineHasThreeWords && thirdLineHasFiveWords;
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  showValidationError() {
    if(!this.isValid()) {
      return (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      )
    }
    return null;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {this.showValidationError()}
      </div>
    );
  }
}

export default PoemWriter;
