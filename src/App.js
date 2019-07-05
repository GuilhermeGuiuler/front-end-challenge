import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
// import { createBrowserHistory } from 'history'

import Routes from './routes'
import store from './store'
// const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
