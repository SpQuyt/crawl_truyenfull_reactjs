import React, { Component } from 'react';
import './ItemCard.css';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {getStoryInfo} from '../../Services/api';

export default class ItemCard extends Component {
  goToDetail = async () => {
    const result = await getStoryInfo('tien-nghich');
    console.log(result);
  }

  render() {
    return (
      <button className="Card-container" onClick={this.goToDetail}>
        <div className="Card-footer">
          <Typography className="Name" color="textPrimary">
            {this.props.name}
          </Typography>
          <Typography className="Age" color="textPrimary">
            {this.props.age}
          </Typography>
        </div>
      </button>
    );
  }
}

ItemCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  // title: PropTypes.string,
  // author: PropTypes.string,
  // latestChap: PropTypes.number,
}