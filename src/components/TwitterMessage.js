//import the react library
import React from 'react';
import PropTypes from 'prop-types';

//create a component
class TwitterMessage extends React.Component {
  constructor() {
    super();
//define the initial value
    this.state = {
      tweet: '',
    };
  }
  //render the input with updated value by changing the state
  handleTweet = event => {
    this.setState({
      tweet: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        //Make this a controlled component by adding the necessary props to the input element. Value is saved in the component's state
        <input type="text" value={this.state.tweet} onChange={this.handleTweet} />
        //Show the remaining characters in the component
        <span>{this.props.maxChars - this.state.tweet.length}</span>
      </div>
    );
  }
}

//This component takes one prop, maxChars
TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
}

TwitterMessage.defaultProps = {
  maxChars: 140,
}


export default TwitterMessage;
