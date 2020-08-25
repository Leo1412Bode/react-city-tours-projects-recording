import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  /* constructor(props) {
    super(props);
    
  } */

  state = {
    tourD: tourData,
  };

  removeTour = (id) => {
    const { tourD } = this.state;
    const sortTourD = tourD.filter(tour => tour.id !== id);
    this.setState  ({
      tourD: sortTourD,
    });
  };

  render() {
    const { tourD } = this.state;
    return (
      <section className="tourList">
        {tourD.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}

        {/* {tour.map((item) => (
          <Tour key={item.id} info={item} removeTour ={this.removeId} />
        ))} */}
      </section>
    );
  }
}
