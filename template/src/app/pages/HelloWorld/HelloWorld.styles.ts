import styled from 'styled-components';

export const HelloWorldContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
`;
