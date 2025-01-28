import {Link} from "react-router-dom";

export function SignUp(){

return(

    <div>

<div
        style={{
          height: "40vh", 
          backgroundImage: "url('/b.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
          Sign Up
        </h1>
      </div>


        
        <div class="row mt-4">
          <div class="col"></div>
          <div class="col">

           <div class="form">
            <div class="mb-3">
                <label for="">First Name</label>
                <input type="text" name="" id="" class="form-control" placeholder="firstName"/>
            </div>
            <div class="mb-3">
                <label for="">Last Name</label>
                <input type="text" name="" id="" class="form-control" placeholder="lastName"/>
            </div>
            <div class="mb-3">
                <label for="">Email</label>
                <input type="email" name="" id="" class="form-control" placeholder="email" />
            </div>
            <div class="mb-3">
                <label for="">Mobile No</label>
                 <input type="number" name="" id=""  class="form-control" placeholder="123445"  />
            </div>
            <div class="mb-3">
                <label for="">Date of Birth</label>
                 <input type="date" name="" id="" class="form-control"/>
           </div>
            <div class="mb-3">
                <label for="">Address</label>
                <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <div class="mb-3">
                <label for="">Password</label>
                 <input type="password" name="" id="" class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="">Confirm Password</label>
                 <input type="password" name="" id="" class="form-control" />
            </div>
            <div class="mb-3">
                 <div>Alreay have an account? <Link to="/SignIn">SignIn here</Link> </div>
                 <button class="btn btn-primary">Submit</button>
            </div>
           </div>




          </div>
          <div class="col"></div>
        </div>
    </div>
    
)

}
export default SignUp;