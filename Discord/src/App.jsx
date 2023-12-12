// src/App.jsx
import './App.css';
import logo from './assets/discord-logo-white.png';
import background from "./assets/discord-background.png"
import menuIcon from "./assets/menu-icon.png"

function App() {
  return (
    <div className="App">
      <div className="Navbar">
    <img src={logo} alt="discord logo" className="dscrdLogo"/>
    <img src={menuIcon} alt = "menu icon" />
    </div>
    <h1>IMAGINE A PLACE...</h1>
    <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend life together. A place that makes it easy to talk every day and hang out more often</p>
    <img src={background} alt="discord background" />
    <button className='macDownload'>Download for Mac</button>
    <button className='browserBtn'>Open Discord in your browser</button>
    </div>
  );
}

export default App;