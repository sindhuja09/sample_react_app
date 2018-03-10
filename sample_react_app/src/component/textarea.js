import React, { Component } from 'react';

class TextareaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render() {
    return (
      <div className="MarkdownEditor">
        <h3>sample sate</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
      </div>

    );
  }
}

export default TextareaComponent;

