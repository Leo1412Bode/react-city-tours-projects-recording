import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
