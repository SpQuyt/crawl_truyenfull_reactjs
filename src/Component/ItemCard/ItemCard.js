import React, { Component } from 'react';
import './ItemCard.css';
import PropTypes from 'prop-types';
import { getStoryInfo } from '../../Services/api';
// import { url } from 'inspector';

export default class ItemCard extends Component {
  goToDetail = async () => {
    alert('hmmm');
  }

  render() {
    return (
      <button className="Card-container"
        onClick={this.goToDetail}
        style={{ background: url(this.props.poster) }}>
        <div className="Card-footer">
          <div className="Title">
            {this.props.title}
          </div>
          <div className="Author">
            {this.props.author}
          </div>
        </div>
      </button>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  poster: PropTypes.string,
  // latestChap: PropTypes.number,
}