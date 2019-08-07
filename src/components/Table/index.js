import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

class Table extends Component {
  render() {
    const { list, onDismiss } = this.props;
    return (
      <div className="list__display">
        {list.map(item => (
          <ul key={item.objectID} className="table-row">
            <li>
              <a href={item.url}>{item.title}</a>
            </li>
            <li>{item.author}</li>
            <li>{item.num_comments}</li>
            <li>{item.points}</li>
            <li>
              <Button
                className={item.title}
                onClick={() => onDismiss(item.objectID)}
              >
                Dismiss
              </Button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;
