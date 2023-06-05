import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  margin: ${p => p.theme.space[0]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  transition: all 0.2s ease-in-out;

  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.accent};
    svg {
      fill: ${p => p.theme.colors.accent};
      stroke: ${p => p.theme.colors.accent};
    }
    :active {
      color: ${p => p.theme.colors.accent};
      svg {
        fill: ${p => p.theme.colors.accent};
        stroke: ${p => p.theme.colors.accent};
      }
    }
  }
`;
