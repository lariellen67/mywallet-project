import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HD;
  color: ${props => props.theme.colors.WHITE};
  background: ${props => props.theme.colors.SECONDARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 0.5px solid ${props => props.theme.colors.GRAY};
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.WHITE};
`

export const Welcome = styled.h3``

export const UserName = styled.span``
