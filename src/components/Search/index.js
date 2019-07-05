import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FiChevronRight } from 'react-icons/fi'
import Loader from 'react-loader-spinner'

import { getUser } from '../../store/ducks/home'

import { Container, Wrap, Action, Field, ErrorBox, ErrorText } from './styles'

function Search({ history }) {
  const [name, setName] = useState('')
  const [goPerfil, setGoPerfil] = useState(false)
  const search = useSelector(state => state.home)
  const dispatch = useDispatch()

  function handleSearch() {
    dispatch(getUser(name))
  }

  useEffect(() => {
    if (!search.error && !search.loading) {
      setGoPerfil(true)
    }
  }, [search.loading])

  if (goPerfil) {
    return <Redirect push to={`/perfil/${name}`} />
  }

  return (
    <Container>
      {console.log('SEARCH', history)}
      <Wrap>
        <Field
          autoFocus
          placeholder="digite aqui o usuário"
          onChange={text => setName(text.target.value)}
          value={name}
        />
        <Action onClick={handleSearch}>
          <FiChevronRight color="#fff" size={25} />
        </Action>
      </Wrap>
      <ErrorBox pose={search.error === 'Not Found' ? 'visible' : 'hidden'}>
        <ErrorText>que pena, este usuário nāo existe :(</ErrorText>
      </ErrorBox>
    </Container>
  )
}

export default withRouter(Search)
