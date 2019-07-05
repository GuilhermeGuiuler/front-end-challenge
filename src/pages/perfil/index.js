import React from 'react'
import { withRouter } from 'react-router-dom'

function Perfil({ history, match }) {
  return (
    <div>
      <h1>NOME QUE VEM DO PARAMETRO: {match.params.name}</h1>
      {console.log('PERFIL', history)}
      <button onClick={() => history.goBack()}>voltar</button>
    </div>
  )
}

export default withRouter(Perfil)
