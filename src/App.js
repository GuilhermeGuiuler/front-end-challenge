import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './styles/global'

import Routes from './routes'
import store from './store'

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
