import styled from 'styled-components';

const MenuIcon = styled.div`
  position: relative;
  width: 18px;

  &::before, &::after, & > div {
    background-color: #707070;
    border-radius: 3px;
    content: '';
    display: block;
    height:2px;
    margin: 5px 0;
    transition: all .2s ease-in-out;
  }

  &::before {
    transform: ${({ toggled }) => toggled && 'translateY(7px) rotate(135deg)'};
  }

  &::after {
    transform: ${({ toggled }) => toggled && 'translateY(-7px) rotate(-135deg)'};
  }

  & > div {
    transform: ${({ toggled }) => toggled && 'scale(0)'};
  }
`;

export {
  MenuIcon,
};