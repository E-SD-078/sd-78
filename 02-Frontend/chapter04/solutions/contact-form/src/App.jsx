import './App.css';
import Form from './components/Form';
import Products from './components/Products';
import EffectDemo from './components/EffectDemo';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    // setShow((prev) => !prev);
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <button onClick={handleClick}>toggle Effect Demo</button>
      {show ? (
        <EffectDemo />
      ) : (
        <>
          <Form />
          <Products />
        </>
      )}
    </>
  );
}

export default App;
