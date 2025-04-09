import { useState } from 'react';
import '../src/App.css'; // Asegúrate de crear este archivo CSS

export default function SimplePage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">Mi Página Simple en React</h1>
        
        <div className="content">
          <div className="counter-section">
            <p className="counter-text">Contador: <span className="counter-value">{count}</span></p>
            <div className="button-group">
              <button 
                onClick={() => setCount(count - 1)}
                className="button decrease-button"
              >
                Disminuir
              </button>
              <button 
                onClick={() => setCount(count + 1)}
                className="button increase-button"
              >
                Aumentar
              </button>
            </div>
          </div>
          
          <div className="name-section">
            <label className="input-label">Tu nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name-input"
              placeholder="Escribe tu nombre aquí"
            />
            {name && (
              <p className="greeting">
                ¡Hola, <span className="name-value">{name}</span>!
              </p>
            )}
          </div>
        </div>
        
        <div className="footer">
          Creado con React y CSS
        </div>
      </div>
    </div>
  );
}