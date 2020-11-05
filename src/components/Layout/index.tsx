import React from 'react'

import { Container } from './styled'

import Header from '../Header'
import Aside from '../Aside'
import Content from '../Content'

const Layout: React.FC = () => (
  <Container>
    <Header/>
    <Aside/>
    <Content/>
  </Container>
)

export default Layout
