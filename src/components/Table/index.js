import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import classNames from 'classnames';
import Button from '../Button';
import TableNavStyles from './styles';

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse(),
};

const Sort = ({ sortKey, onSort, children, activeSortKey }) => {
  const sortClass = classNames('button-inline', {
    'button-active': sortKey === activeSortKey,
  });
  return (
    <Button className={sortClass} onClick={() => onSort(sortKey)}>
      {children}
    </Button>
  );
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortKey: 'NONE',
      isSortReverse: false,
    };

    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    const isSortReverse =
      this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }

  render() {
    const { list, onDismiss } = this.props;
    const { sortKey, isSortReverse } = this.state;
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;
    return (
      <div className="list__display">
        <TableNavStyles>
          <ul>
            <li>
              <Sort
                activeSortKey={sortKey}
                sortKey="TITLE"
                onSort={this.onSort}
              >
                Title
              </Sort>
            </li>
            <li>
              <Sort
                activeSortKey={sortKey}
                sortKey="AUTHOR"
                onSort={this.onSort}
              >
                Author
              </Sort>
            </li>
            <li>
              <Sort
                activeSortKey={sortKey}
                sortKey="COMMENTS"
                onSort={this.onSort}
              >
                Comments
              </Sort>
            </li>
            <li>
              <Sort
                activeSortKey={sortKey}
                sortKey="POINTS"
                onSort={this.onSort}
              >
                Points
              </Sort>
            </li>
            <li>Archive</li>
          </ul>
        </TableNavStyles>
        {reverseSortedList.map(item => (
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

// const Table = ({ list, onDismiss, sortKey, isSortReverse }) => {
//   const sortedList = SORTS[sortKey](list);
//   const reversedSortedList = isSortReverse ? sortedList.reverse() : sortedList;

//   return (
//     <div className="list__display">
//       {reversedSortedList.map(item => (
//         <ul key={item.objectID} className="table-row">
//           <li>
//             <a href={item.url}>{item.title}</a>
//           </li>
//           <li>{item.author}</li>
//           <li>{item.num_comments}</li>
//           <li>{item.points}</li>
//           <li>
//             <Button
//               className={item.title}
//               onClick={() => onDismiss(item.objectID)}
//             >
//               Dismiss
//             </Button>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };

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
