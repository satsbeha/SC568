export default function SignUp(props){
    return(
        <div class="signup" id="signup_id"
        style= {{"margin-top": "20px", "margin-left": "300px"}}>
         <form class="bs-example" onSubmit={(event)=>props.signUpButtonHandler(event)}>
             <div>
                 <div class="form-group row">
                     <label for="first_name" class="col-sm-2 col-form-label">First name</label>
                     <div class="col-sm-6">
                         <input type="text" class="form-control" name="firstName" placeholder="first name" required onChange={props.changeUserInput}/>
                     </div>
                     
                 </div>
                 
                 <br/>
                 <div class="form-group row">
                     <label for="last_name" class="col-sm-2 col-form-label">Last name</label>
                     <div class="col-sm-6">
                         <input type="text" class="form-control" name="lastName" placeholder="last name" required onChange={props.changeUserInput}/>
                     </div>
                 </div>
                 <br/>
                 <div class="form-group row">
                     <label for="last_name" class="col-sm-2 col-form-label"></label>
                     <div class="col-sm-8">
                         <label for="role"> Role</label>
                         <select name="role" class="roleOption" onChange={props.changeUserInput}>
                           <option value="member">Member</option>
                           <option value="admin">Admin</option>
                         </select>
                     </div>
                 </div>
                 <br/>
                 <div class="form-group row">
                     <label for="user name" class="col-sm-2 col-form-label">user name</label>
                     <div class="col-sm-6">
                         <input type="text" class="form-control" name="userName" placeholder="user name" required onChange={props.changeUserInput}/>
                     </div>
                 </div>
                 <div style={{textAlign:"center",color:"red"}}>{props.uNameError}</div>
                 <br/>
                 <div class="form-group row">
                     <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                     <div class="col-sm-6">
                         <input type="password" class="form-control" name="password" placeholder="Password" required onChange={props.changeUserInput}/>
                     </div>
                 </div>
                 <div style={{textAlign:"center",color:"red"}}>{props.passwordError}</div>
                 <br/>
                 <div class="form-group row">
                     <div class="col-sm-10 offset-sm-2">
                         <button type="submit" class="btn btn-primary" >submit</button>
                     </div>
                 </div>
             </div>
         </form>
     </div>
    )
}