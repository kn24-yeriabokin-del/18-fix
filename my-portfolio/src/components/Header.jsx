import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#282c34', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ color: '#61dafb', margin: 0 }}>Моє Портфоліо</h2>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Про мене</Link></li>
          <li><Link to="/my-city" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Моє місто</Link></li>
          <li><Link to="/my-future" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Мій розвиток</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;