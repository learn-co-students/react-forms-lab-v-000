import React from 'react';
import ReactDOM from 'react-dom';


export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };

    this.twitter = this.twitter.bind(this);
  }

  twitter(e){
    this.setState({
      tweet: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.twitter}/>
         <p>{this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}
