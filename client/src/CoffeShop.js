import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Category from "./components/Content/Category/Category";
import CategoryEdit from "./components/Content/Category/CategoryEdit";
import ErrorPage from "./components/Content/ErrorPage/ErrorPage";
import Login from "./components/Content/Auth/Login";
import Home from "./components/Content/Home/Home";
import { loadUser } from "./actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "react-loader";
import { Route, Switch, Redirect } from "react-router-dom";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  history: state.history,
  loaded: state.auth.loaded
});

class CoffeShop extends Component {
  state = {
    firstPathname: "/"
  };
  componentDidMount() {
    this.setState({
      firstPathname: this.props.history.history.location.pathname
    });
    this.props.loadUser();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.props.isAuthenticated);
    console.log(this.props.isLoading);
    console.log(this.props.loaded);

    return (
      <Fragment>
        <Switch>
          <Route
            path="/login"
            render={() => {
              return !this.props.isAuthenticated ? (
                <Login />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
          {/* <Loader> */}
          {this.props.isAuthenticated && (
            <Fragment>
              <Header />
              <Menu />

              <div className="content-wrapper">
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/404">
                  <ErrorPage />
                </Route>
                <Route exact path="/category">
                  <Category />
                </Route>

                <Route
                  path="/category/edit/:id"
                  component={CategoryEdit}
                ></Route>
              </div>
              <Footer />
            </Fragment>
          )}
          {/* </Loader> */}
          <Route
            path="*"
            render={() => {
              return !this.props.isAuthenticated ? (
                <Redirect to="/login" />
              ) : (
                <Redirect to={this.state.firstPathname} />
              );
            }}
          />
        </Switch>
      </Fragment>
    );
  }
}

Category.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  loaded: PropTypes.bool
};

export default connect(
  mapStateToProps,
  { loadUser }
)(CoffeShop);
