import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      valid: false,
      textarea: ""
    };
  }

  checkPoem = (e) => {
    let poem = e.target.value;
    let split = poem.split(/\n/);
    let rows = split.map(r => r.trim().split(" "));

    if (rows.length === 3 && rows[0].length === 5 && rows[1].length === 3 && rows[2].length === 5) {
      this.setState({
        valid: true,
        textarea: e.target.value
      })
    }
    else {
      this.setState({
        valid: false,
        textarea: e.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.checkPoem}/>

      {!this.state.valid &&
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      }

      </div>
    );
  }
}

export default PoemWriter;
