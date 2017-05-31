import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      message: '',
    };
  }
  handleChange(e) {
    this.setState({
      message: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.message.length} characters left</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140,
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
}
