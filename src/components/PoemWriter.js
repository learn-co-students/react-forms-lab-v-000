import React from 'react';

function validPoem(poem){
  const lines = poem.trim().split('\n')

  if (lines.length === 3  ) {
    let lineOne = (lines[0].trim().split(' ').filter(l => l).length === 5)
    let lineTwo = (lines[1].trim().split(' ').filter(l => l).length === 3)
    let lineThree = (lines[2].trim().split(' ').filter(l => l).length === 5)
    return (lineOne && lineTwo && lineThree)
  } else {
  return false
}

}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      isValid: '',
      value: ''
    };
  }



  handleChange = (event) => {
    const poem = event.target.value
      this.setState({
      value: event.target.value,
      isValid: validPoem(poem)
    })
  }


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value} onChange={this.handleChange}
        />
      {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

export default PoemWriter;
