import React, { Component } from 'react';
import {
    NavLink,
    HashRouter
   } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }

    render() {
        const show = (this.state.menu) ? "show" : "";
        const defaultUrl = this.props.defaultUrl;
        const loginUrl = this.props.loginUrl;
        //const mainUrl = this.props.mainUrl;
        const registerUrl = this.props.registerUrl;

        return (
            <HashRouter>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href={defaultUrl}>Activity List</a>
                    <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }
                            aria-controls="navbarCollapse" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse " + show}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to={defaultUrl}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={registerUrl}>Register</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href={defaultUrl} tabIndex="-1" 
                                    aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <div className="form-inline mt-2 mt-md-0">
                            <NavLink className="nav-link" to={loginUrl}>Login</NavLink>
                        </div>
                    </div>
                </nav>
            </HashRouter>
        );
    }
}
