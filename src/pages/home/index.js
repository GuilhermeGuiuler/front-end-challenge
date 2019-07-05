import React from 'react'

import Search from '../../components/Search'

import LogoImage from '../../assets/images/logo.png'

import { Center, Title, Logo } from './styles'

function Home({ history }) {
  return (
    <Center>
      <Logo src={LogoImage} />
      <Title>
        Que tal um google do github? <br />
        Insira o usuário que deseja stalkear abaixo:
      </Title>
      <Search history={history} />
    </Center>
  )
}

export default Home
