import React from "react";

class PoemWriter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            poemText: '',
            poemValid: false,
        };

        this.poemValidator = this.poemValidator.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    poemValidator = () => {
        let poem = this.state.poemText;
        let poemCount = poem.split(/\s+/);

        if (poemCount.length === 14) {
            return ""
        } else {
            return <div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>
        };
    };

    handleChange = e  => {
        this.setState({poemText: e.target.value});
    }

    render() {
        return (
            <div>
            <textarea rows="3" cols="60" name="poemText" onChange={this.handleChange} value={this.state.poemText} />
            {this.poemValidator()}
            </div>
        );
    }
}

export default PoemWriter;
