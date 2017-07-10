import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      remain: this.props.maxChars
    };
  }

  change = (e) => {
    this.setState({
      value: e.target.value,
      remain: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.change} value={this.state.value}/>
        <p>Remain: {this.state.remain}</p>
      </div>
    );
  }
}

export default TwitterMessage;
