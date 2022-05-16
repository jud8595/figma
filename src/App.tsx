import React from 'react';
import Theme from './components/Theme';
import { Menu } from './components/Menu';
import { ServiceCardCarousel } from './components/ServiceCardCarousel';


function App() {
  return (
    <Theme>
      <>
        <Menu />
        <ServiceCardCarousel />
      </>
    </Theme>
  );
}

export default App;
