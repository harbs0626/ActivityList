import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-md-4 loginForm" >
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <hr></hr><br></br>
                            <div className="form-group">
                                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" 
                                    required="" autoFocus="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" 
                                    required="" />
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            <p className="mt-5 mb-3 text-muted text-center"></p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
