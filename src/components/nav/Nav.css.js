import styled from 'styled-components';

const Navlinks = styled.ul`
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
    color: indigo;
    font-weight: bold;
    transition-duration: 0.18s;

    &:hover {
      color: #fff;
      border-bottom: 1px solid #fff;
      transform: scale(1.13);
    }
  }
`;

Navlinks.defaultProps = {
  theme: {
    bg: 'none'
  }
};

export { Navlinks };
