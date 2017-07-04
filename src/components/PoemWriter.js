import React from 'react';

function validPoem(poem){
  const lines = poem.trim().split('\n')

  if (lines.length === 3  ) {
    let lineOne = (lines[0].trim().split(' ').length == 5)
    let lineTwo = (lines[1].trim().split(' ').length == 3)
    let lineThree = (lines[2].trim().split(' ').length == 5)
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
          alue={this.state.value} onChange={this.handleChange}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          <p>{this.state.value}</p>
          {(this.state.isValid) ?" " : "poem is not written in the right structure!"}

        </div>
      </div>
    );
  }
}

export default PoemWriter;
