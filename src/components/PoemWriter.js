import React from 'react';
// The rules for a valid poem structure are as follows:
// The poem has three lines.
// The first line has five words.
// The second line has three words.
// The third line has five words.
// Be sure to account for users accidentally adding too many spaces! This means that ' I am a furry dog ' is a valid first line of the poem.
// Make sure that if a user types in the textarea but then deletes all of the content the error message is still showing.

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      error: null
    };
  }


handleChange = (event) => {
  var lines = event.target.value.split("\n");
  var error = this.state.error;
  if (lines.length !== 3) error = "This poem is not written in the right structure!";
  else if (lines[0].trim().split(" ").length !== 5 || lines[1].trim().split(" ").length !== 3 || lines[2].trim().split(" ").length !== 5) error = "This poem is not written in the right structure!";
  else error = null;
  this.setState({poem: event.target.value, error: error});
}


  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange}
          rows="3"
          cols="60" />
          {(this.state.error) ? <div id="poem-validation-error" style={{color: 'red'}}>{this.state.error}</div>: null}
      </div>
    );
  }
}

export default PoemWriter;
