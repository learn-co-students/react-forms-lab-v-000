import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleInputChange = event => {
    const validPoem = parsePoem(event.target.value)
    this.setState({
      value: event.target.value,
      withErrors: validPoem
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        {!this.state.withErrors &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            "This poem is not written in the right structure!"
          </div>
        }
      </div>
    );
  }
}

function parsePoem(validPoem) {
  var rows = validPoem.split("\n");
  if (rows.length === 3 && rows[2] !== "") {
    if (
      rows[0].match(/\S+/g).length === 5 &&
      rows[1].match(/\S+/g).length === 3 &&
      rows[2].match(/\S+/g).length === 5
    ) {
      return true
    } else {return false}
  } else {return false}
}

export default PoemWriter;
