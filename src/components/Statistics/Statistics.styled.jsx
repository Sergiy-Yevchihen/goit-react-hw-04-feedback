import styled from 'styled-components';

export const StaticList = styled.ul`
  padding: 12px;
  max-width: 480px;
  margin: 0 auto;

  border-radius: 4px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: #d8e0ff;
`;

export const DescrStatistics = styled.p`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  margin: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  transition: all 0.2s ease-in-out;

  color: #6f31ff;
  text-shadow: ${props => props.theme.shadows.textShadow};
  cursor: pointer;
  svg {
    fill: ${p => p.theme.colors.accent};
    stroke: ${p => p.theme.colors.accent};
  }
`;
