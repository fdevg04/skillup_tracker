import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000') // Ruta raíz del backend
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching:', error));
  }, []);

  return (
    <div>
      <h1>SkillUp Tracker</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
