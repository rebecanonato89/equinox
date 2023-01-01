import './App.css';
import face from './images/facebook.png';
import insta from './images/instagram.png';
import logo from './images/logo.png';
import whats from './images/whatsapp.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estamos em construção. <br />{' '}
          <strong>Enquanto isso nos acompanhe nas redes sociais.</strong>
        </p>
        <div className="social">
          <a
            className="App-link"
            href="https://www.instagram.com/equinox.inovacoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} className="face" alt="face" />
          </a>
          <a
            className="App-link"
            href="https://wa.me/5535988682079"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whats} className="whats" alt="whats" />
          </a>
          <a
            className="App-link"
            href="https://www.facebook.com/equinoxsolucoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={face} className="face" alt="face" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
