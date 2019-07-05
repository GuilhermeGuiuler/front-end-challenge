import React from 'react'

function Perfil({ history, match }) {
  return (
    <div>
      <h1>{match.params.name}</h1>
      {console.log(history)}
      <button onClick={() => history.goBack(-1000)}>voltar</button>
    </div>
  )
}

export default Perfil
