import styled, { keyframes } from 'styled-components';

const Item = styled.p`
  margin: 0 0 6px 0;
  color: #707070;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    color: green;
  }
`;

const Section = styled.div`
  padding: 18px;
  border-left: 1px solid #ccc;
  min-width: 300px;

  &:first-of-type {
    border-left: 0;
  }
`;

const SectionTitle = styled.p`
  margin: 0 0 12px 0;
  font-weight: bold;
  text-transform: capitalize;
`;

const PopupContent = styled.div`
  display: flex;
  color: black;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  margin-top: 8px;
  background: #FFFFFF;
  color: #FFFFFF;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 3px;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;

  &::before {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 10px;
    margin-left: -5px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #ccc transparent;
  }

  &::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 10px;;
    margin-left: -4px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

export {
  Item,
  Section,
  SectionTitle,
  PopupContainer,
  PopupContent,
};