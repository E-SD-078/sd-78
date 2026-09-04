import { useEffect, useState } from 'react';

const EffectDemo = () => {
  const [name, setName] = useState('john');
  const [age, setAge] = useState(10);
  useEffect(() => {
    console.log('THIS WILL ONLY RUN ONE TIME COMPONENT DIDMOUNT');
    return () => {
      console.log('THIS WILL ONLY RUN when the ComponentWillUnMount');
      //remove setTimeout
      //remove setInterval
      //remove web sockets
      //remove any memory leak operations
    };
  }, []);
  useEffect(() => {
    console.log('this will run every time the name change ComponentDidUpdate');
    console.log('WHAT IS THE NEW NAME', name);
  }, [name]);
  useEffect(() => {
    console.log('this will run every time the age change ComponentDidUpdate');
    console.log('WHAT IS THE NEW age', age);
  }, [age]);
  useEffect(() => {
    console.log('this will run every time the name or age change ComponentDidUpdate');
    console.log('WHAT IS THE NEW NAME,AGE', name, age);
  }, [name, age]);
  const handleNameChange = (e) => {
    setName(e.target.value);
    //setState is async func so the state will always be the old one here but in useEffect we will always get the correct current state
    console.log('WHY IS THE NAME NOT THE CORRECT ONE???', name);
  };
  return (
    <div>
      <input type='text' name='name' value={name} onChange={handleNameChange} />
      <input type='text' name='name' value={age} onChange={(e) => setAge(e.target.value)} />
    </div>
  );
};

export default EffectDemo;
