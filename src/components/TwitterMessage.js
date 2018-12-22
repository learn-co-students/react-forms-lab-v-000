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
          Your message
          <input type="text" onChange={event => this.handleTweet(event)} value={this.state.tweet} />
        </div>
        <div>  
            <p>Characters remaining: <strong>{this.state.maxChars - this.state.tweet.length}</strong></p>
        </div>    
      </form>
    );
  }
}

export default TwitterMessage
