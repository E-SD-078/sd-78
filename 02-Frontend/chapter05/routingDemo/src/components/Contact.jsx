import { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router';
const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for the feedback'); //any logic that takes time
    navigate('/');
  };
  return (
    <>
      <Header />
      <h2>Contact</h2>
      <form className='p-4 bg-gray-300 flex flex-col gap-4' onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input
          type='text'
          className='border w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor=''>message</label>
        <input
          type='text'
          className='border w-full'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='bg-blue-500 rounded p-2'>send</button>
      </form>
    </>
  );
};
export default Contact;
