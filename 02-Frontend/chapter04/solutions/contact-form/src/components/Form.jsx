import { useState } from 'react';
import ShowData from './ShowData';

/*
Objective:

Create a contact form.

Instructions:

Create a contact form with:
Name field
Email field
Telephone field
Message field
Control the form with a single piece of state
On form submission:
Prevent the default behaviour
Validate that all fields have data
Output form data to console.
*/
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      alert('please fill in all the inputs');
    } else {
      console.log('Here are the data', formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input name='name' value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          phone:
          <input name='phone' value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name='message' value={formData.message} onChange={handleChange} required />
        </label>
        <button>Submit</button>
      </form>
      <ShowData formData={formData} />
    </>
  );
};

export default Form;
