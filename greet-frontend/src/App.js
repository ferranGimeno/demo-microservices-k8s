import React, { useState } from 'react';

function GreetingApp() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/greet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      setGreeting(data.message || 'Hello!');
      
    } catch (error) {
      console.error('Error fetching greeting:', error);
      setGreeting('Error: Could not fetch greeting.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Greeting App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Greet</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default GreetingApp;
