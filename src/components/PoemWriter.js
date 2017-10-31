import React from 'react';



var isValidPoem = (words) => {
  const lines_number = words.trim().split('\n').length
  if (words && lines_number >= 3){
        const line_one = words.split('\n')[0].split(" ").filter( l => l ).length
        const line_two = words.split('\n')[1].split(" ").filter( l => l ).length
        const line_three = words.split('\n')[2].split(" ").filter( l =>l ).length
     if (lines_number === 3 && line_one === 5 && line_two === 3 && line_three === 5){return true}
     }
     return false
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      validPoem: true
    };
  }

  handleChange = event => {
    this.setState({
      poem: event.target.value,
      validPoem: isValidPoem(event.target.value)
    })
  }



  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange = {this.handleChange}
          value = {this.state.poem}
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



export default PoemWriter;
