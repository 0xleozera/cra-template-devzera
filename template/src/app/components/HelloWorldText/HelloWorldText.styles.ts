import styled from 'styled-components';

export const HelloWorldTextStyled = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondary};
`;
