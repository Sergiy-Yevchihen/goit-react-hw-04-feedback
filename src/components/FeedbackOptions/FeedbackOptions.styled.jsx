import styled from 'styled-components';

export const BtnWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[4]}px;
`;
