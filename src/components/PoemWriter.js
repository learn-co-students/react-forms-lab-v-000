import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      error: null
    };
  }

  handleChange = (e) => {
    var lines = e.target.value.split('\n');
    var error = this.state.error;
    if(lines.length !== 3) error = 'Poem must be three lines.';
    else if(lines[0].trim().split(/\W+/).length !== 5 || lines[2].trim().split(/\W+/).length !== 5) error = 'This line must have five words.';
    else if(lines[1].trim().split(/\W+/).length !== 3)error = 'This line must have three words.';
    else error = null;
    this.setState({poem: e.target.value, error: error});
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} value={this.state.text}
          rows="3"
          cols="60" />
        {(this.state.error) ? <div id="poem-validation-error" style={{color: 'red'}}>{this.state.error}</div>: null}
      </div>
    );
  }
}

export default PoemWriter;
