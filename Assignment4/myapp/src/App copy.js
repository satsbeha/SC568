// import React, { Component } from "react";
// import Student from "./Student";
// class App extends Component {
//   state = {
//     students: [
//       { name: "Jhon", age: 12 },
//       { name: "Bob", age: 67 },
//       { name: "Ezra", age: 2 },
//     ],
//   };
//   incrementAge = (index) => {
//     const students = this.state.students;
//     students[index].age+=1;
//     this.setState({ students });
//   };
//   render() {
//     return (
//         <div>
//           <h3>Student List</h3>
//           <Student
//             name={this.state.students[0].name}
//             age={this.state.students[0].age}
//             index={0}
//             increment={this.incrementAge}
//           ></Student>
//           <Student
//             name={this.state.students[1].name}
//             age={this.state.students[1].age}
//             index={1}
//             increment={this.incrementAge}
//           ></Student>
//            <Student
//             name={this.state.students[2].name}
//             age={this.state.students[2].age}
//             index={2}
//             increment={this.incrementAge}
//           ></Student>
//         </div>
//     );
//   }
// }

// export default App;
