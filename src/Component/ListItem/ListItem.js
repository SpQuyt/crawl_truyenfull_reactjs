import React, { Component } from 'react';
import './ListItem.css';
import ItemCard from '../ItemCard/ItemCard';
import GridList from '@material-ui/core/GridList';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  render() {
    return (
      <div className="root">
        <GridList className="list-container" cellHeight={10}>
          {this.props.dataList.map((result) => {
            return (<ItemCard
              key={result._id}
              title={result.title}
              author={result.author}
              poster={result.poster}
              description={result.description}
              status={result.status}
              categoryList={result.categoryList}
            />)
          })}
        </GridList>
      </div>

    )
  }
}

ListItem.propTypes = {
  dataList: PropTypes.array,
}