import React from 'react';
import { MenuIcon } from './styles';

const Menu = ({ toggleMenu, toggled }) => (
  <MenuIcon
    onClick={() => toggleMenu()}
    toggled={toggled}
  >
    <div />
  </MenuIcon>
);

export default Menu;