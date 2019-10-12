import React from 'react';
import { PopupContainer, PopupContent } from './styles';

const Popup = ({ content, toggled }) => {
  return (
    <PopupContainer toggled={toggled}>
      <PopupContent>
        {content}
      </PopupContent>
    </PopupContainer>
  )
};

export default Popup;