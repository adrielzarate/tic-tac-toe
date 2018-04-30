import styled from 'styled-components';
import { transparentize } from 'polished';

const Button = styled.button`
  display: inline-block;
  margin: 0 ${props => props.theme.space.xs} ${props => props.theme.space.sm};
  width: ${props => props.theme.space.xl};
  line-height: ${props => props.theme.space.xl};
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.grayLight};
  cursor: pointer;
  /* background: ${props => props.theme.colors.white}; */
  border: 1px solid ${props => props.theme.colors.grayLight};
  border-radius: ${props => props.theme.space.xs};
  box-shadow: inset 0 1px 0 ${props => transparentize(0.2, props.theme.colors.white)},
    0 1px 2px ${props => transparentize(0.05, props.theme.colors.white)};
  text-align: center;
  text-transform: uppercase;
  outline: none;
  &:hover {
    background-image: linear-gradient(
      to top,
      ${props => props.theme.colors.white},
      ${props => props.theme.colors.grayLight}
    );
  }
`;

export default Button;
