import React, { useState } from 'react';
import './App.css';

import Menu from './Menu/Hamburger';
import Popup from './Popup';

import { Item, Section, SectionTitle } from './styles';

const MENU_ITEMS = [
  {
    wine: [
      'merlot',
      'cabernet sauvignon',
      'pinot noir',
      'riesling',
      'rose',
    ]
  },
  {
    cider: [
      'dry',
      'sweet',
      'funky'
    ]
  },
  {
    liquor: [
      'gin',
      'tequila',
      'vodka',
      'rum',
      'whiskey'
    ]
  }
];

const renderSections = (handleSelect, items) => {
  return (
    items.map(obj => {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          return (
            <Section>
              <SectionTitle key={key}>{key}</SectionTitle>
              {obj[key].map(item => {
                return (
                  <Item key={item} onClick={handleSelect}>{item}</Item>
                );
              })}
            </Section>
          )
        }
      }
    })
  )
}


function App() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(null);
  const toggleMenu = () => setToggle(!toggle);
  const handleSelect = selectedItem => {
    toggleMenu();
    setSelected(selectedItem);
  };

  return (
    <div className="App">
      <Menu toggleMenu={toggleMenu} toggled={toggle} />
      {toggle ? (
        <Popup handleSelect={handleSelect} content={renderSections(handleSelect, MENU_ITEMS)} />
      ) :
        null
      }
    </div>
  );
}

export default App;