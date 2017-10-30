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
    // var lines = this.state.inputText.split(/\r|\r\n|\n/);
    var lines = this.state.inputText.split("\n").filter( l => l.match(/[a-zA-Z]+/g));

    var countAll = lines.length;
    if (countAll === 3) {
      // split each line by word
      var countFirst = lines[0].match(/[a-zA-Z]+/g)
      var countSecond = lines[1].match(/[a-zA-Z]+/g)
      var countThird = lines[2].match(/[a-zA-Z]+/g)

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
