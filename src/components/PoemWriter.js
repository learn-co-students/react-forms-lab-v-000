import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {error: null, value: ''};
  }

  onInput = (event)=>{
    var lines = event.target.value.split('\n');
    var error = this.state.error;
    if(lines.length !== 3)error = 'Poem must be three lines.';
    else if(lines[0].trim().split(/\W+/).length !== 5)error = 'The first line must contain five words.';
    else if(lines[1].trim().split(/\W+/).length !== 3)error = 'The second line must contain three words.';
    else if(lines[2].trim().split(/\W+/).length !== 5)error = 'The third line must contain five words.';
    else error=null;
    this.setState({value: event.target.value, error: error});
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.onInput}
        />
        {this.state.error &&
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

export default PoemWriter;
