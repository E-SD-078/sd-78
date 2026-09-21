import { type ChangeEvent, type SubmitEvent, useState } from 'react';

const FormHandler = () => {
  const [email, setEmail] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      console.log('email is required');
      return;
    }
    console.log('Form submitted:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='email' type='email' value={email} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormHandler;
