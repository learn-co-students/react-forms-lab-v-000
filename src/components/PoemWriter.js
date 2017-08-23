import React from 'react';

// var errorBody = '';

class PoemWriter extends React.Component {

  constructor() {
    super();

    this.state = {
      value: '',
      errorBody: ''
    };
  }

  isValid(string) {
    let poemArray = string.split(/\n/)
    return (poemArray.length == 3 &&
      poemArray[0].trim().split(' ').length == 5 &&
      poemArray[1].trim().split(' ').length == 3 &&
      poemArray[2].trim().split(' ').length == 5
    );
  }

  handleChange = (event) => {

    const errorMessage = (
      <div id="poem-validation-error" style={{color: 'red'}}>
      This poem is not written in the right structure!
      </div>
    );

    this.setState({
      value: event.target.value
    });

    if (this.isValid(event.target.value) && event.target.value != '') {
        return null
    } else {
        this.setState({
          errorBody: errorMessage
        });
      }
    }

  render() {

    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
        {this.state.errorBody}
      </div>
    );
  }

}

export default PoemWriter;
