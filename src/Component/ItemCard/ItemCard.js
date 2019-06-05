import React, { Component } from 'react';
import './ItemCard.css';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

export default class ItemCard extends Component {
  goToDetail = async () => {
    browserHistory.push({
      pathname: '/StoryDetail',
      state: {
        poster: this.props.poster,
        author: this.props.author,
        title: this.props.title,
        description: this.props.description,
        status: this.props.status,
        categoryList: this.props.categoryList,
      }
    });
  }

  render() {
    return (
      <button className="item-card-container"
        title={this.props.title}
        onClick={this.goToDetail}
        style={{ backgroundImage: `url(${this.props.poster})` }}
      // style={{ backgroundImage: `url(${image})` }}
      >
        <div className="item-card-footer">
          <div className="item-card-title">
            {this.props.title}
          </div>
          <div className="item-card-author">
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
  description: PropTypes.array,
  status: PropTypes.string,
  categoryList: PropTypes.array,
  // latestChap: PropTypes.number,
}