import React, { Component } from 'react';
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

export default Table;
