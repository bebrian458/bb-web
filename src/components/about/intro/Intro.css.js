import styled from 'styled-components';
// import profilePic from '../../images/profile/benjamin-parker-OhKElOkQ3RE-unsplash.jpg';
import profilePic from '../../../images/profile/ryan-holloway-P2FNYWOlgZs-unsplash.jpg';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: calc(100vh - 50px);
  background: #000;
`;

const ProfilePicContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProfilePic = styled.img.attrs({
  src: profilePic
})`
  max-width: 600px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 500px;
  min-height: 350px;
  margin: 0 auto;
  color: white;
  word-break: break-word;

  a {
    color: white;
    text-decoration: underline;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  font-size: 1rem;
  // padding: 10px;
  background: linear-gradient(to right, black, grey);
  box-shadow: 0px 0px 0px 1px #888888;
  border: none;
  cursor: pointer;
  transition-duration: 0.18s;

  a {
    color: white;
    display: block;
    padding: 10px;
  }

  &:hover {
    transform: scale(1.13);
  }
`;

export { Container, ProfilePic, ProfilePicContainer, Description, Button };
