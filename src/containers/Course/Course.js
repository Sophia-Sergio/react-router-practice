import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Course extends Component {


  state = {
    loadedCourse: null
  }

  componentDidMount(){
    this.loadData();
  }

  componentDidUpdate(){
    this.loadData();
  }

  loadData(){
    const id = this.props.match.params.id;
    if(id){
      if (!this.state.loadedCourse || (this.state.loadedCourse && this.state.loadedCourse.id != id)){
        console.log(this.props.course)
        this.setState({ loadedCourse: this.props.course });
        console.log(this.state)
      }
    }
  }

  render() {
    let course = <h5>loading</h5>;
    if (this.state.loadedCourse){
      course = (
        <div>
          <h1>{this.state.loadedCourse.title}</h1>
          <p>You selected the Course with ID: _ID_</p>
        </div>
      )
    }
    return course;
  }
}

export default withRouter(Course);
