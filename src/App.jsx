import { useState } from 'react';
import viteLogo from './assets/Vite.js.svg';
import reactLogo from './assets/logo_dark.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" width={80} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo" alt="React logo" width={80} />
        </a>
      </div>

      <h1>Vite + React</h1>

      <button className="counter" onClick={() => setCount(count + 1)}>
        count is {count}
      </button>

      <p>Edit <code>src/App.jsx</code> and save to test <code>HMR</code></p>
    </div>
  );
}

export default App;