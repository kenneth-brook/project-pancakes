import React from 'react';
import DisplayCard from './cards/DisplayCard';

import bg from'./assets/bg.jpg';



function App() {
  return (
    <div>
      <div className="App" style={{ backgroundImage: `url(${bg})` }}>
        <header className="App-header neon-wraper">
          <span className="txt">PANCAKECAT.COM</span>
          <span className="grad"></span>
          <span className="dodge"></span>
        </header>
      </div>
      <div>
      <DisplayCard />
      </div>
    </div>
  );
}

export default App;
