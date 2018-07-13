import React from "react";

const PoemValidation = (poem) => {
  const lines = poem.split('\n').map(line => line.trim());
  const isValidLineQty = lines.length === 3;

  if (poem && isValidLineQty) {
    const firstLineWordsQty = lines[0].split(" ").length;
    const secondLineWordsQty = lines[1].split(" ").length;
    const thirdLineWordsQty = lines[2].split(" ").length;

    return (firstLineWordsQty === 5 && secondLineWordsQty === 3
    && thirdLineWordsQty === 5);
  }
  
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }

  // validate poem on every change
  handleChange = (event) => {
    const poem = event.target.value;
    this.setState({
      poem: poem,
      isValid: PoemValidation(poem)
    });
  }

  render() {
    const isValid = this.state.isValid;
    let validation;

    // conditional display of validation error
    if (!isValid) {
      validation = <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>;
    } else {
      validation = null;
    }

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange} />
        {validation}
      </div>
    );
  }
}

export default PoemWriter;
