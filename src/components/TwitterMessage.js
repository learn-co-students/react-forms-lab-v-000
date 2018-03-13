import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chrs: '',
      remaining: this.props.maxChars
    };
  }

  handleChange = (e)=> {
    this.setState({chrs: e.target.value}, ()=> this.setState({remaining: this.props.maxChars - this.state.chrs.length}))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
               value={this.state.chrs} 
               onChange={this.handleChange} />
        <p>Remaining chars: {this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
