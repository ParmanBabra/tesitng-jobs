import React, { Component, Fragment } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import GoogleMapReact from "google-map-react";

import { fatchRestaurants } from "actions/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantReactComponent = ({ id, text }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
      cursor: "pointer"
    }}
  >
    <FontAwesomeIcon icon="map-marker" size="3x" color="rgb(191, 23, 54)" />
  </div>
);

class Map extends Component {
  static defaultProps = {
    center: { lat: 13.8238617, lng: 100.53314 },
    zoom: 15
  };
  state = {
    selected: null
  };

  selectRestaurant = restaurant => {
      console.log("ok");
    //this.setState({ selected: restaurant });
  };

  componentDidMount() {
    this.props.fatchRestaurants();
  }
  renderRestaurants = () => {
    if (this.props.restaurants.length == 0) {
      return <Fragment>Loadding....</Fragment>;
    }

    return this.props.restaurants.map(item => (
      <RestaurantReactComponent
        lat={item.location.lat}
        lng={item.location.lng}
        text={item.name}
        id={item.place_id}
        key={item.place_id}
      />
    ));
  };

  render() {
    return (
      <div style={{ height: "calc(100vh - 160px)", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAso9D1cLVSekxBVBXRVD9qmNGY1ir7w24" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.renderRestaurants()}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.map.restaurants
});

export default connect(mapStateToProps, { fatchRestaurants })(Map);
