import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      hasError: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const lines = value.split("\n").map((e) => e.trim().split(" "));
    let error = false;

    if(lines.length !== 3){ error = true };
    if(lines[0] && lines[0].length !== 5){ error = true };
    if(lines[1] && lines[1].length !== 3){ error = true };
    if(lines[2] && lines[2].length !== 5){ error = true };

    this.setState({
      value: value,
      hasError: error
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60"
          value={this.state.value} onChange={this.handleChange} />
        {this.state.hasError &&
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}
