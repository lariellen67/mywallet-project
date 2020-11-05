import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
  'AS HD'
  'AS CT';
  height: 100vh;
`;
