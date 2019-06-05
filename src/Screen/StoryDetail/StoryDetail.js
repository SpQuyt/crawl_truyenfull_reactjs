import React, { Component } from '../../../node_modules/react';
import './StoryDetail.css';

export default class StoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: null,
      author: null,
      title: null,
      description: null,
      status: null,
      categoryList: null,
    }
  }

  async componentWillMount() {
    this.setState({
      poster: this.props.location.state.poster,
      author: this.props.location.state.author,
      title: this.props.location.state.title,
      description: this.props.location.state.description,
      status: this.props.location.state.status,
      categoryList: this.props.location.state.categoryList,
    });
  }

  renderDescription() {
    return this.state.description.map((paragraph, index) => {
      return (<div className="story-detail-description" key={index}>{paragraph}</div>)
    })
  }

  renderCategory() {
    return this.state.categoryList.map((category, index) => {
      return (<div className="story-detail-category-button" key={index}>{category}</div>)
    })
  }

  render() {
    return (
      <div className="story-detail-container">
        <div className="story-detail-title">
          {this.state.title}
        </div>

        <div className="story-detail-info">
          <div className="story-detail-other-info">
            <img src={this.state.poster} alt="Poster" />

            <div className="story-detail-author">
              <b>Tác giả:</b>
              &nbsp;&nbsp;
              {this.state.author}
            </div>

            <div className="story-detail-category-container">
              <b>Thể loại:</b>&nbsp;&nbsp;
              <div>
                {this.renderCategory()}
              </div>
            </div>

            <div className="story-detail-status">
              <b>Trạng thái:</b>
              &nbsp;&nbsp;
              {this.state.status}
            </div>
          </div>
          <div className="story-detail-description-container">
            {this.renderDescription()}
          </div>
        </div>
      </div>

    )
  }
}