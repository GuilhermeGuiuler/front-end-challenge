import React, {useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Perfil({ history, match }) {
  const search = useSelector(state => state.home)
  const dispatch = useDispatch()

  function handleBack() {
    dispatch({ type: '@user/CLEAR_USER'})  
    history.goBack()
  }

  return (
    <div>
      <h1>NOME QUE VEM DO PARAMETRO: {match.params.name}</h1>
      <button onClick={handleBack}>VOLTAR</button>
    </div>
  )
}

export default withRouter(Perfil)
