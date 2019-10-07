import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Category from "./components/Content/Category";
import CategoryEdit from "./components/Content/CategoryEdit";
import ErrorPage from "./components/Content/ErrorPage";

import { Route } from "react-router-dom";

export default class App extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
        {/* Thay đổi content ở bên trong này
            Thêm route vào để thay đổi content */}
        <div>
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            <Route exact path="/category" component={Category}></Route>
            <Route
              exact
              path="/category/edit/:id"
              component={CategoryEdit}
            ></Route>
            <Route exact path="/404" component={ErrorPage}></Route>
            {/* <Redirect to="/404"></Redirect> */}
          </div>
          {/* /.content-wrapper */}
        </div>
        {/* Thay đổi content ở bên trong này */}
        <Footer />
      </React.Fragment>
    );
  }
}
