import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import ErrorPage from "./components/Content/ErrorPage/ErrorPage";

import Category from "./components/Content/Category/Category";
import CategoryEdit from "./components/Content/Category/CategoryEdit";

import Material from "./components/Content/Material/Material";
import MaterialEdit from "./components/Content/Material/MaterialEdit";

import { Provider } from "react-redux";
import store from "./store";

import { Route } from "react-router-dom";

export default class App extends Component {
  state = {
    modal: false,
    name: ""
    //quantity: 0
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //this.setState({ [e.target.quantity]: e.target.value });
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
            {/*Category*/}
            <Route exact path="/category" component={Category}></Route>
            <Route
              exact
              path="/category/edit/:id"
              component={CategoryEdit}
            ></Route>

            {/*Material*/}
            <Route exact path="/material" component={Material}></Route>
            <Route
              exact
              path="/material/edit/:id"
              component={MaterialEdit}
            ></Route>

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
