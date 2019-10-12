import React, { useState } from 'react';
import './App.css';

import Menu from './Menu/Hamburger';

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <div className="App">
      <Menu toggleMenu={toggleMenu} toggled={toggle} />
    </div>
  );
}

export default App;