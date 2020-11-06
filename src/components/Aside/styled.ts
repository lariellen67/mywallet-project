import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background: ${props => props.theme.colors.SECONDARY};
  padding-left: 20px;
  border-right: 0.5px solid ${props => props.theme.colors.GRAY};
`;

export const Head = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const Logo = styled.img`
  height: 35px;
  width: 35px;
`;

export const Title = styled.p`
  color: ${props => props.theme.colors.WHITE};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.INFO};
  transition: opacity 0.3s;
  margin: 7px 0;
  display: flex;
  align-items: center;

  &:hover {
    opacity: .7;
  }

  >svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;



