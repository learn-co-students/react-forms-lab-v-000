import React from "react"
import PropTypes from "prop-types"

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const {maxChars} = this.props
    return (
      <div>
        <h3>Remaining Characters: {maxChars - this.state.value.length}</h3>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
}

TwitterMessage.defaultProps = {
  maxChars: 100
}

export default TwitterMessage;
