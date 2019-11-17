import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import Category from "./components/Content/Category/Category";
import CategoryEdit from "./components/Content/Category/CategoryEdit";

import ErrorPage from "./components/Content/ErrorPage/ErrorPage";

import Supplier from "./components/Content/Supplier/Supplier";
import SupplierEdit from "./components/Content/Supplier/SupplierEdit"

import { Provider } from "react-redux";
import store from "./store";

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
      <Provider store={store}>
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
              component={CategoryEdit}>
              </Route>
              <Route exact path="/supplier" component={Supplier}></Route>
              <Route
                exact
                path="/supplier/edit/:id"
                component={SupplierEdit}>
              </Route>
            <Route exact path="/404" component={ErrorPage}></Route>
            {/* <Redirect to="/404"></Redirect> */}
          </div>
          {/* /.content-wrapper */}
        </div>
        {/* Thay đổi content ở bên trong này */}
        <Footer />
      </Provider>
    );
  }
}
