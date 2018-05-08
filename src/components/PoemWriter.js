import React from "react";

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
    });
  }

  valid = () => {
    let rows = this.state.value.split('\n');
    rows = rows.map(x => x.trim().split(" "));

    if (rows.length === 3) {
      if (rows[0].length === 5 && rows[1].length === 3 && rows[2].length === 5) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {!this.valid() ?
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div> : '' }
      </div>
    );
  }
}

export default PoemWriter;
