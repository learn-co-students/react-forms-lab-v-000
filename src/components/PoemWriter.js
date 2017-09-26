import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value:'',
      error:''
    };
  }

  handleChange = event => {
  this.setState({
    value: event.target.value,
  });
    if (this.state.value === '') {
      this.setState({
        error: true
      })
    // } else if () {
      // this.state.error = true
    } else if (this.state.value.match(/\S+/g).length) {
      this.setState({
        error: false
      })
    }

    // var linecount = value.match(^\r\n).length
    // var wordcount = value.match(/\S+/g).length;
    // poem-validation-error
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

