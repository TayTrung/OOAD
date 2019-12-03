import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import PaySlip from "./components/Content/PaySLip/PaySlip";
import PaySlipEdit from "./components/Content/PaySLip/PaySlipEdit";
import Category from "./components/Content/Category/Category";
import CategoryEdit from "./components/Content/Category/CategoryEdit";
import Member from "./components/Content/Member/Member";
import OrderScreen from "./components/Content/OrderAndInvoices/OrderScreen";
import Invoice from "./components/Content/OrderAndInvoices/Invoice";
import InvoiceEdit from "./components/Content/OrderAndInvoices/InvoiceEdit";
import MemberEdit from "./components/Content/Member/MemberEdit";
import ErrorPage from "./components/Content/ErrorPage/ErrorPage";

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
            <Route exact path="/member" component={Member}></Route>
            <Route
              exact
              path="/member/edit/:id"
              component={MemberEdit}>
            </Route>
            <Route exact path="/orderScreen" component={OrderScreen}></Route>
            <Route exact path="/invoice" component={Invoice}></Route>
            <Route
              exact
              path="/invoice/edit/:id"
              component={InvoiceEdit}>
            </Route>
            <Route exact path="/payslip" component={PaySlip}></Route>
            <Route
              exact
              path="/payslip/edit/:id"
              component={PaySlipEdit}>
            </Route>
            <Route exact path="/404" component={ErrorPage}></Route>
          </div>
        </div>
        <Footer />
      </Provider>
    );
  }
}
