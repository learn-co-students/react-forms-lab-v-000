import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {message: ""};
    this.twitterUpdate = this.twitterUpdate.bind(this);
  }

  twitterUpdate(e){
    this.setState({message: e.target.value});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.twitterUpdate}/>
        <p>characters left: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
