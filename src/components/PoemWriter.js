import React from "react";

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  handleChange = (event) => {
  this.setState({
    content: event.target.value
    })
  }

  validatePoem = (poem) => {
    let rows = poem.split('\n');
    if (rows.length !== 3) return false;
    let [row1, row2, row3] = [rows[0].trim().split(' '), rows[1].trim().split(' '), rows[2].trim().split(' ')];
    if (row1.length === 5 && row2.length === 3 && row3.length === 5) {
        return true
      }
      return false
    }

    displayError = () => {
      if (this.validatePoem(this.state.content)) {
        return null;
      } else {
        return (
          <div id="poem-validation-error"style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )
      }
    }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handleChange} />
        {this.displayError()}
      </div>
    );
  }
}

export default PoemWriter;
