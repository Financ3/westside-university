import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({students: res.data});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="box">
        <h2>{this.props.match.params.class}</h2>
        {this.state.students.map(elem => {
          return (
          <Link to={`/student/${elem.id}`} key={elem.id}>
            <h3>{elem.first_name} {elem.last_name}</h3>
          </Link>
        )})}
      </div>
    )
  }
}