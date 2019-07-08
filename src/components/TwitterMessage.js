import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  getInitialState = () => {
          return {
              chars_left: this.props.maxChars
          };
      }


  handleChange = event => {
    this.setState({
      [event.target.message]: event.target.value
    })
  }

  handleChangeChars = (event) => {
          var input = event.target.value;
          this.setState({
              chars_left: this.props.maxChars - input.length
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
         value={this.state.value}
         onChange={this.handleChange}
         maxLength="140" />
      </div>
    );
  }
}

export default TwitterMessage;




// var TwitterInput = React.createClass({
//     getInitialState: function() {
//         return {
//             chars_left: max_chars
//         };
//     },
//     handleChange(event) {
//         var input = event.target.value;
//         this.setState({
//             chars_left: max_chars - input.length
//         });
//     },
//     render: function() {
//         return (
//             <div>
//                 <textarea onChange={this.handleChange.bind(this)}></textarea>
//                 <p>Characters Left: {this.state.chars_left}</p>
//             </div>
//         );
//     }
// });
