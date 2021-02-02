import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor() {
        super();
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.address = React.createRef();
        this.contactNumber = React.createRef();
        this.province = React.createRef();
        this.country = React.createRef();
        this.postalCode = React.createRef();
        this.username = React.createRef();
        this.password = React.createRef();
        this.emailAddress = React.createRef();
    }

    submitUser(event){
        event.preventDefault();

        axios.post('http://localhost:4000/api/user/register', {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            address: this.address.current.value,
            contactNumber: this.contactNumber.current.value,
            province: this.province.current.value,
            country: this.country.current.value,
            postalCode: this.postalCode.current.value,
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
                        <div className="mx-auto col-md-10 loginForm" >
                            <h1 className="h3 mb-3 font-weight-normal">My Personal Information</h1>
                            <hr></hr>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="firstName" className="sr-only">First Name</label>
                                        <input type="text" ref={this.firstName} className="form-control" placeholder="First Name" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="lastName" className="sr-only">Last Name</label>
                                        <input type="text" ref={this.lastName} className="form-control" placeholder="Last Name" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address" className="sr-only">Address</label>
                                <input type="text" ref={this.address} className="form-control" placeholder="Address" 
                                    required="" autoFocus="" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="contactNumber" className="sr-only">Contact Number</label>
                                        <input type="text" ref={this.contactNumber} className="form-control" placeholder="Contact Number" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="province" className="sr-only">Province</label>
                                        <input type="text" ref={this.province} className="form-control" placeholder="Province" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="country" className="sr-only">Country</label>
                                        <input type="text" ref={this.country} className="form-control" placeholder="Country" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="postalCode" className="sr-only">Postal Code</label>
                                        <input type="text" ref={this.postalCode} className="form-control" placeholder="Postal Code" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto col-md-10 loginForm2" >
                            <h1 className="h3 mb-3 font-weight-normal">My Access Details</h1>
                            <hr></hr>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="username" className="sr-only">Username</label>
                                        <input type="text" ref={this.username} className="form-control" placeholder="Username" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="password" className="sr-only">Password</label>
                                        <input type="password" ref={this.password} className="form-control" placeholder="Password" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="emailAddress" className="sr-only">Email address</label>
                                        <input type="email" ref={this.emailAddress} className="form-control" placeholder="Email address" 
                                            required="" autoFocus="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto col-md-10 text-center">
                            <hr></hr>
                            <button className="btn btn-primary" 
                                type="submit">Submit</button>
                        </div>
                    </div>
                </form>

            </>
        );
    }
}

export default Register;
