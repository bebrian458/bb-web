import styled from 'styled-components';

const Navlinks = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  padding: 0px 30px;
  height: 50px;
  background: ${props => props.theme.bg};

  a {
    display: block;
    padding: 0px 5px;
    margin: 0px 5px;
    color: ${props => props.theme.text};
    font-weight: bold;
    transition-duration: 0.18s;

    &:hover {
      color: #fff;
      transform: scale(1.13);

      &:after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 50%;
        border-bottom: 1px solid #fff;
      }
    }
  }
`;

Navlinks.defaultProps = {
  theme: {
    bg: 'none',
    text: 'indigo'
  }
};

export { Navlinks };
