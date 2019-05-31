import React, { Component } from '../../../node_modules/react';
import './Home.css';
import ListItem from '../../Component/ListItem/ListItem';
import {getStoryInfo} from '../../Services/api'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Truong Anh Quoc',
          age: 20
        },
        {
          name: 'Vu Thu Huong',
          age: 21
        },
        {
          name: 'Bui Phuong Ha',
          age: 21
        },
        {
          name: 'Nguyen Mai Chi',
          age: 21
        },
      ],
    }
  }

  async componentDidMount() {
    // const result = await getStoryInfo('tien-hiep');
    // console.log(result);
  }

  render() {
    return (
      <div>
        <ListItem dataList={this.state.data}/>
      </div>
    )
  }
}