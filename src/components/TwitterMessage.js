import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content : '',
      charactersRemaining: this.props.maxChars
    };
  }



  // state is async so the textlength wont update until we close this function
  handleContent = (event) => {
      this.setState({
      content: event.target.value
    })
  }


  //() => console.log(this.state.content, event.target.textLength,  this.props.maxChars)
  //() => console.log(140 - event.target.textLength)

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" value={this.state.content} onChange={this.handleContent} />
        <p> {this.props.maxChars - this.state.content.length} characters remaining </p>
        </form>
      </div>
    );
  }
}

export default TwitterMessage;
