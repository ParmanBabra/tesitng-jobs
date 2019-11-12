import React, { Component } from "react";

export default WrappedComponent => {
  class withAuth extends Component {
    componentDidMount() {
      let token = localStorage.getItem("token");

      if (!token) {
        this.props.history.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return withAuth;
};
