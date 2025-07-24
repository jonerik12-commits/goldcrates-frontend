import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Connecting...');

  useEffect(() => {
    fetch('https://github.com/jonerik12-commits/goldcrates-frontend')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>🎁 GoldCrates Frontend</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  );
}

export default App;
