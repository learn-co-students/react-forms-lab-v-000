import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      validPoem: false
    };
  }

  handleChange = event => {
    this.setState({
      poem: event.target.value,
      validPoem: parsePoem(event.target.value)
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          name="poem"
          value={this.state.poem}
          onChange={this.handleChange}
        />
        {!this.state.validPoem &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

function parsePoem(poem) {
  var rows = poem.split("\n");
  if (rows.length === 3 && rows[2] !== "") {
    if (
      rows[0].match(/\S+/g).length === 5 &&
      rows[1].match(/\S+/g).length === 3 &&
      rows[2].match(/\S+/g).length === 5
    ) {
      return true
    } else {return false}
  } else {return false};
}
  
export default PoemWriter;