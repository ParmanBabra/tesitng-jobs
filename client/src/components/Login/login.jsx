import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { compose } from "redux";
import { graphql } from "@apollo/react-hoc";
import { LOGIN } from "graphqls/index";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  wasValidated: false
};

export class Login extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    let wasValidated = false;

    if (!this.state.email) {
      emailError = "email is blank!";
      wasValidated = true;
    }

    if (!this.state.password) {
      passwordError = "password is blank!";
      wasValidated = true;
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError, wasValidated });

      return false;
    }

    this.setState({ wasValidated });

    return true;
  };

  handleLogin = async event => {
    event.preventDefault();

    if (!this.validate()) {
      return;
    }

    let { email, password } = this.state;
    let {
      data: {
        login: { token }
      }
    } = await this.props.Login({
      variables: { email, password }
    });

    localStorage.setItem("token", token);
    this.props.history.push("/");
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props);
    let { email, password } = this.state;

    return (
      <div className="root">
        <form
          onSubmit={event => this.handleLogin(event)}
          noValidate
          className={this.state.wasValidated ? "was-validated" : ""}
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={email}
              required
              autoFocus
            />
            <div className="invalid-feedback">{this.state.emailError}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={password}
              required
            />
            <div className="invalid-feedback">{this.state.passwordError}</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(LOGIN, {
    name: "Login"
  }),
  withRouter
)(Login);
