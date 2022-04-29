import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';

import '../styles/App.scss';
import "../fontello/css/fontello.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <Header />
        </header>
        <nav>
          <Navigation />
        </nav>
        <main>
          <section>
            <Page />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
