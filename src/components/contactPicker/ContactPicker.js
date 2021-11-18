import React from 'react';

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange} required>
      <option key='-1' value='' selected disabled>
        Select a contact...
      </option>
      {contacts.map(contact => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
