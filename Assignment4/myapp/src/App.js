import React, { Component } from "react";
import Student from "./Student";
import Menu from "./Menu";
import ind from "./ind";
/**
 * [
      {id:0,name:"Ezra",age:2},
      {id:1,name:"Redda",age:30},
      {id:2,name:"Kaleb",age:17}
    ]
 */
class App extends Component {
  state = {
    students:[
      {id:0,name:"Ezra",age:2},
      {id:1,name:"Redda",age:30},
      {id:2,name:"Kaleb",age:17}
    ],
    showStudents:true
  };
  showHideStudents=()=>{
    const showStudents=this.state.showStudents;
    this.setState({showStudents:!showStudents})
  }
  getAllStudent= async()=>{
    const students=await(await fetch("http://localhost:3000/students")).json()
    //this.setState({students:students})
    let result=  await this.addToState(students) 
  }
  addToState=async (students)=>{
    this.setState({students:students})
  }
  addNewStudent=(event)=>{
    console.log("add new students ")
    console.log(document.getElementById("name_input"))
    const students=this.state.students
    let studentInput={id:this.state.students.length+1,name:event.target.name,age:event.target.age}
    students.push(studentInput)
   this.setState({students:students})
  }
  incrementAge = (index) => {
    const students = this.state.students;
    students[index].age += 1;
    this.setState({ students });
  };
  decrement = (index) => {
    const students = this.state.students;
    students[index].age -= 1;
    this.setState({ students });
  };
  delete=(index)=>{
    const students=this.state.students
    students.splice(index,1)
    this.setState({students})
  }
  changeName=(id,event)=>{
      const result=this.state.students.map((stu)=>{
        if(stu.id==id){
          let copy={...stu};
          copy.name=event.target.value;
          return copy;
        }
      })
      this.setState({students:result})
  }
  render() {
    return (
      <div>
        <h3>Student List</h3>
         <Menu 
         getAllStudent={this.getAllStudent}
         addNewStudent={(event)=>this.addNewStudent(event)}
         ></Menu>
         <br/>
         <br/>
         <button onClick={this.showHideStudents}>Show/Hide</button>
        {this.state.showStudents?
          this.state.students.map((stu) => {
          return (
            <Student
              name={stu.name}
              age={stu.age}
              increment={()=>this.incrementAge(stu.id)}
              delete={()=>this.delete(stu.id)}
              decrement={()=>this.decrement(stu.id)}
              // changeName={(event)=>this.changeName(stu.id,event)}
            ></Student>
          );
        }):null}
      </div>
    );
  }
}

export default App;
