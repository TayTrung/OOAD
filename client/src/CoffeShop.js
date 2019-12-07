import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Category from './components/Content/Category/Category'
import CategoryEdit from './components/Content/Category/CategoryEdit'
import Supplier from './components/Content/Supplier/Supplier'
import SupplierEdit from './components/Content/Supplier/SupplierEdit'
import ErrorPage from './components/Content/ErrorPage/ErrorPage'
import Login from './components/Content/Auth/Login'
import Home from './components/Content/Home/Home'
import { loadUser } from './actions/authActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from 'react-loader'
import { Route, Switch, Redirect } from 'react-router-dom'
import Role from './components/Content/Role/Role'
import RoleEdit from './components/Content/Role/RoleEdit'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  history: state.history,
  isLoaded: state.auth.isLoaded,
  user: state.auth.user,
})

class CoffeShop extends Component {
  state = {
    firstPathname: '/',
  }
  componentDidMount() {
    this.setState({
      firstPathname: this.props.history.history.location.pathname,
    })
    this.props.loadUser()
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Fragment>
        {!this.props.isLoaded ? (
          <Loader></Loader>
        ) : (
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return !this.props.isAuthenticated ? (
                  <Redirect to="/login" />
                ) : (
                  <Redirect to="/home" />
                )
              }}
            />

            <Route
              exact
              path="/login"
              render={() => {
                return !this.props.isAuthenticated ? (
                  <Login />
                ) : (
                  <Redirect to="/home" />
                )
              }}
            />
            {this.props.isAuthenticated && (
              <Fragment>
                <Header />
                <Menu />

                <div className="content-wrapper">
                  <Switch>
                    <Route exact path="/home">
                      <Home />
                    </Route>
                    <Route path="/404">
                      <ErrorPage />
                    </Route>
                    <Route exact path="/category">
                      <Category />
                    </Route>
                    <Route exact path="/role">
                      <Role />
                    </Route>
                    <Route
                      exact
                      path="/role/edit/:id"
                      component={RoleEdit}
                    ></Route>
                    <Route
                      exact
                      path="/category/edit/:id"
                      component={CategoryEdit}
                    ></Route>
                    <Route exact path="/supplier" component={Supplier}></Route>
                    <Route
                      exact
                      path="/supplier/edit/:id"
                      component={SupplierEdit}
                    />
                    <Route path="*" render={() => <Redirect to="/404" />} />
                  </Switch>
                </div>
                <Footer />
              </Fragment>
            )}
            <Route path="*" render={() => <Redirect to="/login" />} />
          </Switch>
        )}
      </Fragment>
    )
  }
}

Category.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  user: PropTypes.object,
}

export default connect(mapStateToProps, { loadUser })(CoffeShop)
