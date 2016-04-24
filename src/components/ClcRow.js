import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class ClcRow extends React.Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
    sortVal: PropTypes.string.isRequired,
    sortCode: PropTypes.string.isRequired,
    clc: PropTypes.object.isRequired,
    handleItemClick: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    const sortCode = ReactDOM.findDOMNode(this.refs.sortCode).innerHTML;
    const sortArr = this.props.sort(this.props.clc, this.props.level + 1, 0, sortCode);
    if (sortArr.length === 0) {
      return;
    }
    this.props.handleItemClick(sortCode);
  }
  render() {
    return (
      <li onClick={this.handleItemClick}>
        <span ref="sortCode" className="sort-code">{this.props.sortCode}</span>
        <span>{this.props.sortVal}</span>
      </li>
    );
  }
}

module.exports = ClcRow;
