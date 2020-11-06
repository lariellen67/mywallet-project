import React from 'react'

import { Container, SwitchLabel, Toggle } from './styled'

const Switch: React.FC = () => {
  return(
  <Container>
    <SwitchLabel>&#127774;</SwitchLabel>
    <Toggle uncheckedIcon={false} checkedIcon={false} checked onChange={() => {}}/>
    <SwitchLabel>&#127770;</SwitchLabel>
  </Container>
  )
}

export default Switch
