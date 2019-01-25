import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "this content",
      characters: 140
    };

  }

  changeContent = (event)=>{
    this.setState({
      content: event.target.value,
      characters: this.props.maxChars - event.target.value.length
    })
    console.log(this.state.characters)


  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.content} onChange={this.changeContent}/>
        <br/>Characters remaining: {this.state.characters}
      </div>
    );
  }
}

export default TwitterMessage;
