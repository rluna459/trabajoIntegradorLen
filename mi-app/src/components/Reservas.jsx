import { useState } from 'react';

function Reservas() {
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const habitaciones = [
    { id: 1, nombre: 'Habitación Single Estándar', precio: '$50.000 / noche' },
    { id: 2, nombre: 'Habitación Doble Superior', precio: '$85.000 / noche' },
    { id: 3, nombre: 'Suite Deluxe con Vista al Mar', precio: '$150.000 / noche' },
    { id: 4, nombre: 'Penthouse Familiar', precio: '$220.000 / noche' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitacionSeleccionada || !fechaInicio || !fechaFin) {
      alert('Por favor, selecciona una habitación y el rango de fechas.');
      return;
    }
    alert(`¡Reserva exitosa!\nHabitación: ${habitacionSeleccionada}\nDesde: ${fechaInicio}\nHasta: ${fechaFin}`);
  };

  return (
    <section id="reservas" style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Reserva tu Habitación</h2>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Selecciona una habitación:
          <select 
            value={habitacionSeleccionada} 
            onChange={(e) => setHabitacionSeleccionada(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          >
            <option value="">-- Elige una opción --</option>
            {habitaciones.map((hab) => (
              <option key={hab.id} value={hab.nombre}>
                {hab.nombre} - {hab.precio}
              </option>
            ))}
          </select>
        </label>

        <label>
          Fecha de Entrada:
          <input 
            type="date" 
            value={fechaInicio} 
            onChange={(e) => setFechaInicio(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </label>

        <label>
          Fecha de Salida:
          <input 
            type="date" 
            value={fechaFin} 
            onChange={(e) => setFechaFin(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </label>

        <button type="submit" style={{ padding: '0.75rem', background: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Confirmar Reserva
        </button>
      </form>
    </section>
  );
}

export default Reservas;