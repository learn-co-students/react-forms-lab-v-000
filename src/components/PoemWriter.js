import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false,
    };
  }

  checkCorrectFields = () => {
    const rows = this.state.value.split("\n")
    return ((rows.length === 3) &&
      (rows[0].split(" ").filter(word => word).length === 5) &&
      (rows[1].split(" ").filter(word => word).length === 3) &&
      (rows[2].split(" ").filter(word => word).length === 5)
    )
  }

  handleInput = e => {
    this.setState({
      value: e.target.value,
    }, () => {
        if (this.checkCorrectFields()) {
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
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleInput}/>
        {this.state.valid ? null : (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>)}
      </div>
    );
  }
}

export default PoemWriter;
