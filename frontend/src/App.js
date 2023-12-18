import React, { useState } from 'react';
import Swiggy from './components/SwiggyComponent';
import Zomato from './components/ZomatoComponent';

function SwiggyComponent() {
  return (
    <Swiggy />
  );
}

function ZomatoComponent() {
  return (
    <Zomato />
  );
}

function App() {
  const [currentComponent, setCurrentComponent] = useState('default');

  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('default')}>RELOAD</button>
      <h1>FoodieSaver</h1>
      <button onClick={() => handleButtonClick('swiggy')}>SWIGGY</button>
      <button onClick={() => handleButtonClick('zomato')}>ZOMATO</button>

      {currentComponent === 'default' && (
        <div>
        <h3>Introducing "FoodieSaver" – Your Ultimate Dining Delight Extension!</h3>
        <p>Are you a food enthusiast always on the lookout for delicious deals? Look no further! Introducing FoodieSaver, the must-have browser extension that brings you exclusive discounts and coupons for your favorite food delivery platforms – Zomato and Swiggy.</p>

        </div>
      )}

      {currentComponent === 'swiggy' && <SwiggyComponent />}
      {currentComponent === 'zomato' && <ZomatoComponent />}
    </div>
  );
}

export default App;
