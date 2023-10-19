import logo from './logo.svg';
import './App.css';
import coderDrawing from './coder_drawing.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coderDrawing} className="App-logo" alt="logo" />
        <p>
        Anndrew Formosa
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Software Developer
        </a>
      </header>
    </div>
  );
}

export default App;
