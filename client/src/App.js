import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import CoffeShop from './CoffeShop'
import { loadHistory } from './actions/historyActions'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'

const history = createBrowserHistory()
class App extends Component {
  state = {}
  componentDidMount() {
    // let history = useHistory();
    store.dispatch(loadHistory(history))
  }
  render() {
    // let history = useHistory();
    return (
      <Router history={history}>
        <Provider store={store}>
          <CoffeShop />
        </Provider>
      </Router>
    )
  }
}

export default App
