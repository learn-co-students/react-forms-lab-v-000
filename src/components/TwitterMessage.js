import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }


    handleChangeChars = event => {

            var input = event.target.value;
            this.setState({
                message: input
            });
        }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
         type="text"
         name="message"
         id="message"
         value={this.state.message}
         onChange={this.handleChangeChars}
         // onChange={this.handleChangeChars.bind(this)}
         maxLength="140" />
           <p>Characters Left: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
