import React from 'react'
import { Container} from './styled';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}

const Select: React.FC<ISelectInputProps> = ({options}) => (
  <Container>
    <select>
      {
        options.map(item => (
        <option value={item.value}>{item.label}</option>
        ))
      }
    </select>
  </Container>
)

export default Select
