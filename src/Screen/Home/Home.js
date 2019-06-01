import React, { Component } from '../../../node_modules/react';
import './Home.css';
import ListItem from '../../Component/ListItem/ListItem';
import { getStoryInfo } from '../../Services/api'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: 1,
    }
  }

  async componentDidMount() {
    const result = await getStoryInfo('tien-hiep');
    this.setState({
      data: result,
      loading: 0,
    })
  }

  render() {
    return (
      this.state.loading === 0 ?
        <div>
          <ListItem dataList={this.state.data} />
        </div>
        :
        <div>
          <header>LOADING</header>
        </div>
    )
  }
}