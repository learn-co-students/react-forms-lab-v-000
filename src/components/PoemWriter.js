import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  checkRows = () => {
    const rows = this.state.value.split("\n")
    return ((rows.length === 3) && 
      (rows[0].split(" ").filter(word => word).length === 5) && 
      (rows[1].split(" ").filter(word => word).length === 3) && 
      (rows[2].split(" ").filter(word => word).length === 5))
  }

  handleInput = event => {
    this.setState({
      value: event.target.value,
    }, () => {
        if (this.checkRows()) {
          this.setState({
            valid: true
          })
        } else {
          this.setState({
            valid: false
          })
        }
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleInput} value={this.state.value} />
        {this.state.valid ? null : (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>)}
      </div>
    );
  }
}

export default PoemWriter;
