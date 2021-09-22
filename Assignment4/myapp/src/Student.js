import React, { Component } from "react";
class Student extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>
          name:{this.props.name} age:{this.props.age}
        </p>
        {/* <input type="text" onChange={this.props.changeName} value={this.props.name}></input> */}
        {/* <br/> */}
        <button onClick={(id) => this.props.increment(id)}>
          Increment age
        </button>
        <button onClick={(id) => this.props.decrement(id)}>
          decrement age
        </button>
        <button onClick={(id) => this.props.delete(id)}>delete</button>
      </div>
    );
  }
}
export default Student;
