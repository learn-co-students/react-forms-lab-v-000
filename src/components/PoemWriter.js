import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      isTextValid: false,
    })
    var text = event.target.value
    var lines = text.split("\n")
    var has3Lines = lines.length === 3
    if (has3Lines) {
      debugger
      var line1 = lines[0].split(" ").filter(str => (str != "'" && str !== " " && str !== "")).length === 5
      var line2 = lines[1].split(" ").filter(str => (str != "'" && str !== " " && str !== "")).length === 3
      var line3 = lines[2].split(" ").filter(str => (str != "'" && str !== " " && str !== "")).length === 5
    }
    if (has3Lines && line1 && line2 && line3) {
      this.setState({
        isTextValid: true,
      })
    }
  }

  render() {
    var valid = this.state.isTextValid
    if (!valid) {
      var error =
      <div
        id="poem-validation-error"
        style={{color: 'red'}}
      >
        This poem is not written in the right structure!
      </div>
    } else {
      var error = null
    }
    return (

      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        { error }
      </div>
    );
  }
}

export default PoemWriter;
