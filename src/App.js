import bg from'./assets/bg.jpg';



function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <header className="App-header neon-wraper">
        <span className="txt">PANCAKECAT.COM</span>
        <span className="grad"></span>
        <span className="dodge"></span>
      </header>
    </div>
  );
}

export default App;
