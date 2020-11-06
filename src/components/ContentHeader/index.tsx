import React from 'react'
import Select from '../../components/Select'

import { Container, Wrapper, Title, Selects } from './styled';

const ContentHeader: React.FC = () => {
  const four = [
    {value: 'run the world', label: 'run the world'},
    {value: 'love on top', label: 'love on top'},
    {value: 'countdown', label: 'countdown'},
  ]

  const lemonade = [
    {value: 'sorry', label: 'sorry'},
    {value: 'don\'t hurt yourself', label: 'don\'t hurt yourself'},
    {value: 'formation', label: 'formation'},
  ]

  return (
  <Container>
    <Wrapper>
      <Title>Dashboard</Title>
      </Wrapper>
      <Selects>
        <Select options={four}/>
        <Select options={lemonade}/>
      </Selects>
  </Container>
  )
}

export default ContentHeader
