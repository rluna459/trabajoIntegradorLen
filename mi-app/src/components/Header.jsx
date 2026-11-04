function Header() {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <h1>Hotel Paradise</h1>
      <nav>
        <a href="#inicio" style={{ color: '#fff', margin: '0 15px' }}>Inicio</a>
        <a href="#acerca" style={{ color: '#fff', margin: '0 15px' }}>Acerca de nosotros</a>
        <a href="#reservas" style={{ color: '#fff', margin: '0 15px' }}>Reservas</a>
      </nav>
    </header>
  );
}

export default Header;