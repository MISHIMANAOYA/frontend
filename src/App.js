// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('http://127.0.0.1:5000/api/data')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error:', error));
  }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{data ? data.message : "Loading..."}</h1>
            </header>
        </div>
    );
}

export default App;