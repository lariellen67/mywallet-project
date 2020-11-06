import React, {useMemo} from 'react'

import { Container, Logo, Wrapper, Profile, Welcome, UserName } from './styled'
import emojis from '../../utils/emojis'
import Switch from '../Switch'
import logo from '../../assets/logo.svg'

const Header: React.FC = () => {
  const emoji = useMemo(()=> {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return(
  <Container>
    <Logo src={logo} alt="logo" />
    <Wrapper>
      <Switch />
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Larissa Ellen</UserName>
      </Profile>
    </Wrapper>
  </Container>
  )
}

export default Header
