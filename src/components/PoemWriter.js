import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value:'',
      error: true
    };
  }

  handleChange = (event) => {
  this.setState({
    value: event.target.value,
  });
   if (event.target.value === '') {
      this.setState({
        error: true
      })
    } else 
	if (event.target.value.match(/\S+/g).length === 13) {
      this.setState({
        error: false
      })
    } else { 
	 this.setState({
       error: true
    })
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
        {this.state.error ?
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div> : ""}
      </div>
    );
  }
}

export default PoemWriter;

