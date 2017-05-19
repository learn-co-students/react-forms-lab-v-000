import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
			tweet: '',
		};

    this.handleChangeTweet = this.handleChangeTweet.bind(this);
    this.handleSubmitTweet = this.handleSubmitTweet.bind(this);
  }
 
  handleChangeTweet(event) {
		this.setState({
			tweet: event.target.value,
		});
	}
 
  handleSubmitTweet(event) {
		alert("Ok, you have Tweeted, now please open a window!")
	}
	
	render() {
    return (
			<div>
				<form onSubmit={this.handleSubmitTweet}>
					<label>
						<strong>Your message:</strong>
						<input type="text" value={this.state.tweet} onChange={this.handleChangeTweet} />
						<span>{this.props.maxChars - this.state.tweet.length}</span>
					</label>
 				</form>
			</div>	
    );
  }
}

TwitterMessage.propTypes = {
	maxChars: React.PropTypes.number,
};

TwitterMessage.defaultProps = {
	maxChars: 140,
}