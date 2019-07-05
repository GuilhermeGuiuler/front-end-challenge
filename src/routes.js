import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Perfil from './pages/perfil'

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/perfil/:name" component={Perfil} />
    </Router>
  )
}
export default Routes
