import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {value: '',
    showError: true
  };
    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    if (this.isValid(event.target.value) === true) {
      this.setState({showError: false})
    }
  }

  isValid(poem) {
    let lines = poem.split("\n")

    let split = lines.map((el) =>
      el.split(" ").filter(word => word !== '').length)

    if (lines.length === 3 && split.join() === "5,3,5") {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />

      {this.state.showError &&
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      }

      </div>
    );
  }
}

export default PoemWriter;
