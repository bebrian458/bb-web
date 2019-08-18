import styled from 'styled-components';
// import bg from '../../images/background/background-calm-clouds-747964.jpg';
import bg from '../../images/background/adventure-alps-background-547114.jpg';

const Body = styled.div`
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
  top: 0;
  // opacity: 0.8;
`;

const CenterText = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Line = styled.hr`
  width: 250px;
`;

export { Body, Name, CenterText, Line };
