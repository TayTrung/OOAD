import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Category from "./components/Content/Category";

import { Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
        {/* Thay đổi content ở bên trong này
            Thêm route vào để thay đổi content */}
        <Route exact path="/category/add" component={Category}></Route>
        {/* Thay đổi content ở bên trong này */}
        <Footer />
      </React.Fragment>
    );
  }
}
