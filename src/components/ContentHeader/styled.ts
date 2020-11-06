import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.WHITE};

  &::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 8px solid ${props => props.theme.colors.WARNING}
  }
`;

export const Selects = styled.div`
  display: flex;
`;
