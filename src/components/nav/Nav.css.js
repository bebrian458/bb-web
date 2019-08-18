import styled from 'styled-components';

const Navlinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  z-index: 2;

  li {
    display: block;
    padding: 5px 10px;
    color: #000;
    font-weight: bold;
    transition-duration: 0.18s;

    &:hover {
      color: #fff;
      border-bottom: 1px solid #fff;
      transform: scale(1.13);
    }
  }
`;

export { Navlinks };
