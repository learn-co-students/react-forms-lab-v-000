import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  handleChange = event => {
    this.setState({
      poem: event.target.value
    });
  }

  valid = () => {
    let rowz = this.state.poem.split('\n').map(x => x.trim().split(" "));
    // rowz = rowz.map(x => x.trim().split(" "));

    if (rowz.length === 3) {
      if (rowz[0].length === 5 && rowz[1].length === 3 && rowz[2].length === 5) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
        {!this.valid() ?
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div> : '' }
      </div>
    );
  }
}

export default PoemWriter;
