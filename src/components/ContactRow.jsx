import React from "react";

export const ContactRow = ({ setSelectedContactId, contact }) => {
  const handleClick = () => {
    setSelectedContactId(contact.id);
  };

  return (
    <tr onClick={handleClick} className="hover-row">
      <td>{contact.name}</td>
      <td>{contact.username}</td>
      <td>{contact.email}</td>
      <td>{contact.website}</td>
    </tr>
  );
};

export default ContactRow;
