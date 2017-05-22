import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validatePoem = this.validatePoem.bind(this);

    this.state = {
      poem: ''
    };
  };

  handleChange(event){
    this.validatePoem();
    this.setState({
      poem: event.target.value
    })
  };

  validatePoem(){
    var poem = this.state.poem;
    if (poem.match(/[\s]*([\S]+[\s]+){4}[\S]+[\s]*[\t\n\r][\s]*([\S]+[\s]+){2}[\S]+[\s]*[\t\n\r][\s]*([\S]+[\s]+){4}[\S]+[\s]*/) != null) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.props.poem} onChange={this.handleChange} />
        {this.validatePoem() ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}
