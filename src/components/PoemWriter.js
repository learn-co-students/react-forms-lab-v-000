import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      error: true
    };
  }

  poemListener = e => {
    this.setState({
      value: e.target.value
    }, () => {
      const lines = this.state.value.split(/\r?\n/)
      if (lines.length === 3) {
        const line1 = lines[0].trim().split(" ")
        const line2 = lines[1].trim().split(" ")
        const line3 = lines[2].trim().split(" ")
        if (line1.length === 5 && line2.length === 3 && line3.length === 5) {
          this.setState({
            error: false
          })
        } else {
          this.setState({
            error: true
          })
        }
      } else {
        this.setState({
          error: true
        })
      }
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.poemListener} />
        {this.state.error &&
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
