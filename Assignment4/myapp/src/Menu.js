export default function menu(props){
    return (
     <div>
     <label>name <input type="text" data-id="name_input"></input></label>
     <label>age <input type="text" data-id="age_input"></input></label>
     <button onClick={(event)=>props.addNewStudent(event)}>add new students</button>
     <br/>
       <button onClick={props.getAllStudent}>get all students</button>
     </div>
    )
}