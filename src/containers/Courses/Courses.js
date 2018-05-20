import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Course from "../Course/Course";
import { withRouter } from 'react-router-dom';

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ],
    selectedCourse: null
  };

  componentDidMount(){
    console.log(this.props)
  }

  // courseHandler(id) {
  //   alert(id);
  //   this.setState({
  //     selectedCourse: id
  //   })
  // }

  courseHandler = id => {
    this.setState({
      selectedCourse: id
    });
  };

  render() {
    let route =  <Route
            path={this.props.match.url + "/:id"}/>;
    if (this.state.selectedCourse) {
      route = (
        <Route
          path={this.props.match.url + "/:id"}
          render={() => (
            <Course
              course={this.state.courses[this.state.selectedCourse - 1]}
            />
          )}
        />
      );
    }

    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <Link
                to={"/courses/" + course.id}
                className="Course"
                key={course.id}
                onClick={() => this.courseHandler(course.id)}
              >
                {course.title}
              </Link>
            );
          })}
        </section>
        {route}
      </div>
    );
  }
}

export default withRouter(Courses);
