import { type MouseEvent } from 'react';

const ClickLogger = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked', event);
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default ClickLogger;
