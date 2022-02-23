import React, {useState} from 'react'

const Login = () => {

  return (
    <React.Fragment>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </React.Fragment>
  )
}

export default Login;