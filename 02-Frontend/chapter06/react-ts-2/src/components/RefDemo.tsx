import { useEffect, useRef } from 'react';

const RefDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };
  useEffect(() => {
    //this make the input focused once the page loaded
    focusInput();
  }, []);
  return (
    <div>
      <button onClick={focusInput}>Focus input</button>
      <input ref={inputRef} />
    </div>
  );
};
export default RefDemo;
