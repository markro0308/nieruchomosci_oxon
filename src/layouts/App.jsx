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
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <nav>
            <Navigation />
          </nav>
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