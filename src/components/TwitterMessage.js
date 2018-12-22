import React from "react"

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: '',
      maxChars: 0
    }
  }

  handleMaxChars = event => {
    this.setState({
      maxChars: event.target.value
    })
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
          <strong>Characters remaining:</strong>
          <input type="number" onChange={event => this.handleMaxChars(event)} value={this.state.maxChars} />
        </div>
      </form>
    );
  }
}

// export default TwitterMessage

// class TextArea extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "hello from @merlo!" };
//     this.recalculate = this.recalculate.bind(this);
//   }
//   recalculate({target: {value}}) {
//     this.setState({
//       text: value
//     });
//   }
//   render() {
//     return (
//       <div>
//         <textarea onChange={this.recalculate} defaultValue={this.state.text}></textarea>
//         <h3>{this.state.text.length}</h3>
//       </div>
//     )
//   }
// }