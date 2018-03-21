import React from "react";
//read more about proptypes here: https://reactjs.org/docs/typechecking-with-proptypes.html

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      message: "" 
    };

    this.setMessage = this.setMessage.bind(this)
  }
  
  setMessage(e){
    this.setState({
      message: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage}/>
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;