import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.emailAddress = React.createRef();
    }

    submitUser(event){
        event.preventDefault();

        axios.post('http://localhost:4000/api/user/register', {
            username: this.username.current.value,
            password: this.password.current.value,
            emailAddress: this.emailAddress.current.value
        })
        .then((response) => {
            alert(response.data.msg);
            console.log(response.data.msg);
        })
        .catch((error) => {
            alert(error.data.message);
            console.log(error.data.message);
        });
    }

    render() {
        return (
            <>
                <form className="container" onSubmit={this.submitUser.bind(this)}>
                    <div className="row">
                        <div className="mx-auto col-md-4 loginForm" >
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <hr></hr><br></br>
                            <div className="form-group">
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input type="text" ref={this.username} className="form-control" placeholder="Username" 
                                    required="" autoFocus="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input type="password" ref={this.password} className="form-control" placeholder="Password" 
                                    required="" autoFocus="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAddress" className="sr-only">Email address</label>
                                <input type="email" ref={this.emailAddress} className="form-control" placeholder="Email address" 
                                    required="" autoFocus="" />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" 
                                type="submit">Submit</button>
                        </div>
                    </div>
                </form>

            </>
        );
    }
}

export default Register;
