import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Head, Logo, Title, MenuContainer, MenuItem } from './styled';
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md'

const Aside: React.FC = () => (
  <Container>
    <Head>
      <Logo src={logo} alt="logo"/>
      <Title>Minha Carteira</Title>
    </Head>
    <MenuContainer>
      <MenuItem href="#"><MdDashboard/>Dashboard</MenuItem>
      <MenuItem href="#"><MdArrowUpward/>Entradas</MenuItem>
      <MenuItem href="#"><MdArrowDownward/>Saídas</MenuItem>
      <MenuItem href="#"><MdExitToApp/>Logout</MenuItem>
    </MenuContainer>
  </Container>
)

export default Aside
