import React, { Component } from '../../../node_modules/react';
import './Home.css';
import ListItem from '../../Component/ListItem/ListItem';
import { getAllStories } from '../../Services/api'
import Store from '../../Services/storeStates'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 1,
    }
  }

  async componentDidMount() {
    if (Store.homeAllStories == null) {
      const result = await getAllStories();
      console.log(result);
      Store.homeAllStories = result;
      this.setState({
        loading: 0,
      })
    }
    else {
      this.setState({
        loading: 0,
      })
    }
  }

  render() {
    return (
      this.state.loading === 0 ?
        <div>
          <ListItem dataList={Store.homeAllStories} />
        </div>
        :
        <div>
          <header>LOADING</header>
        </div>
    )
  }
}