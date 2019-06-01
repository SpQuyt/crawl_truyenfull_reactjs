import React, { Component } from 'react';
import './ListItem.css';
import ItemCard from '../ItemCard/ItemCard';
import GridList from '@material-ui/core/GridList';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  render() {
    return (
      <div className="root">
        <GridList className="List-container" cellHeight={10}>
          {this.props.dataList.map((result) => {
            return (<ItemCard title={result.title} author={result.author} poster={result.poster} />)
          })}
        </GridList>
      </div>

    )
  }
}

ListItem.propTypes = {
  dataList: PropTypes.array,
}