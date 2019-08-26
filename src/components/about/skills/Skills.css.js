import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: calc(100vh - 50px);
  background: #fff;
`;

const Test = styled.p`
  // if the type is set, then change color to blue  
  // color: ${props => props.type && 'blue'};  
    
  // if the type is strictly equal to 'primary' set it to blue
  color: ${props => (props.type === 'primary' ? 'blue' : 'palevioletred')}; 
`;

export { Container, Test };
