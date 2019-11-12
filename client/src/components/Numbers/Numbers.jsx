import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { calculate as calculateAction } from "actions/numbers";

export class Numbers extends Component {
  componentDidMount() {
    this.props.calculate();
  }

  renderNumber = () => {
    if (!this.props.numbers) {
      return <Fragment>Loading...</Fragment>;
    }

    let { x, y, z } = this.props.numbers;

    return (
      <Fragment>
        X = {x}
        <br />Y = {y}
        <br />Z = {z}
      </Fragment>
    );
  };
  render() {
    return (
      <Fragment>
        <h1 className="cover-heading">X, 5, 9, 15, 23, Y, Z</h1>
        <p className="lead">{this.renderNumber()}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  numbers: state.numbers
});

export default connect(mapStateToProps, { calculate: calculateAction })(
  Numbers
);
