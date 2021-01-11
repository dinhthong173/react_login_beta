import React, { Component } from "react";
import "./index.css"
export default class Login extends Component {
    render() {
        return (
            <form>
                <div class="title">
                    <h3>ĐĂNG NHẬP BẰNG EMAIL</h3>
                </div>
                

                <div className="form-group">
                    <label>Email</label><br/>
                    <input type="email" className="form-control" placeholder="Enter email" class="InputEmail"/>
                </div>

                <div className="form-group">
                    <label>Password</label><br/>
                    <input type="password" className="form-control" placeholder="Enter password" class="InputPass"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div class="col text-center">
                        <button type="submit" className="btn btn-lg btn-block btn-danger" class="loginnn">ĐĂNG NHẬP</button>
                </div>

                
                <p className="forgot-password text-right">
                     <a href="#">Quen mat khau?</a>
                </p>
            </form>
        );
    }
}