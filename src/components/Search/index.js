import React from 'react';

const Search = ({ value, onChange, children, onSubmit }) => (
  <div className="form__wrapper">
    <form onSubmit={onSubmit}>
      {children}
      <input value={value} type="text" onChange={onChange} />
      <button type="submit">{children}</button>
    </form>
  </div>
);

export default Search;
