import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      inputText: 'Beginner Text',
      valid: false
    };
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
    // splits text into an array, each line
    var lines = this.state.inputText.split(/\r|\r\n|\n/);
    var countAll = lines.length;

    if (countAll === 3) {
      var countFirst = lines[0].split(" ")
      var countSecond = lines[1].split(" ")
      var countThird = lines[2].split(" ")

      if (countFirst.length === 5 && countSecond.length === 3 && countThird.length === 5) {
        this.setState({
          valid: true
        })
      } else {
        this.setState({
          valid: false
        })
      }
    } else {
      this.setState({
        valid: false
      })
    }

    console.log(event.target, countFirst, countSecond, countThird)
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          { (this.state.valid) ? "" : "This poem is not written in the right structure!"}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
