import React, { Component } from 'react';

class Search extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const { value, onChange, onSubmit, children } = this.props;
    return (
      <div className="form__wrapper">
        <form onSubmit={onSubmit}>
          {children}
          <input
            value={value}
            type="text"
            onChange={onChange}
            ref={el => (this.input = el)}
          />
          <button type="submit">{children}</button>
        </form>
      </div>
    );
  }
}

export default Search;
