import styled from 'styled-components';
import Switch, {ReactSwitchProps} from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 17px 0 10px;
`;

export const SwitchLabel = styled.span`
  color: ${props => props.theme.colors.WHITE};
  font-size: 20px;
`;

export const Toggle = styled(Switch).attrs<ReactSwitchProps>(
  ({theme}) => ({
    onColor: theme.colors.INFO,
    offColor: theme.colors.WARNING,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
