import React from "react"

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props );

    this.state = {
      tweet: '',
      maxChars: props.maxChars
    }
  }

  handleTweet = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <form>
        <div>
          <strong>Your message:</strong>
          <input type="text" onChange={event => this.handleTweet(event)} value={this.state.tweet} />
        </div>
        <div>  
            <strong>Characters remaining: {this.state.maxChars - this.state.tweet.length}</strong>
        </div>    
      </form>
    );
  }
}

export default TwitterMessage
