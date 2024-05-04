import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen items-center justify-center py-0">
        <h1 className="text-blue-600 text-2xl p-0 m-0">
          Notre Nouveau projet va faire mal :)
        </h1>
      </div>
    </>
  );
}

export default App;
