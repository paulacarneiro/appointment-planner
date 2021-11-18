import React from 'react';

export const ContactForm = (({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        id='name' 
        name='name' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder='Name'
        required
      />
      <input 
        type='tel' 
        id='phone' 
        name='phone' 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder='Phone Number' 
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
        required
      />
      <input 
        type='email' 
        id='email' 
        name='email' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder='Email'
        required
      />
      <input 
        type='submit' 
        value='Submit'
      />
    </form>
  );
});
