import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        {/* Main відповідає за те, щоб контент розтягувався і Footer завжди був внизу */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/my-city" element={<MyCity />} />
            <Route path="/my-future" element={<MyFuture />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;