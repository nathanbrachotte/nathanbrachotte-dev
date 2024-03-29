import styled from 'styled-components'

const LinkAnimated = styled.span<{ selected: boolean; color?: string }>`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 2px;
  color: ${(props) => `${props.color || props.theme.colors.alwaysWhite}}`};

  ${(props) =>
    props.selected &&
    `border-bottom:  5px solid ${props.theme.colors.primaryLight}`};
  transition: 0.8s;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -5px;
    background: ${(props) => props.theme.colors.secondaryLight};
    height: 5px;
    transition-property: width;
    transition-duration: 0.8s;
    transition-timing-function: ease-out;
  }

  &:focus:after,
  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`

export default LinkAnimated
