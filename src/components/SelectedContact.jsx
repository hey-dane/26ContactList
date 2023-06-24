import React, { useState, useEffect } from "react";

export const SelectedContact = ({
  selectedContactId,
  setSelectedContactId,
}) => {
  const [contact, setContact] = useState(null);

  const handleGoBack = () => {
    setSelectedContactId(null);
  };

  useEffect(() => {
    async function fetchContacts() {
      try {
        const reponse = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await reponse.json();
        setContact(data);
        console.log(data);
      } catch (error) {
        console.error("error: ", error);
      }
    }

    fetchContacts();
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <>
          <div className="contact-card">
            <h2>{contact.name}</h2>
            <p>Username: {contact.username}</p>
            <p>Email: {contact.email}</p>
            <p>Website: {contact.website}</p>
            <p>BS: {contact.company.bs}</p>
            <button onClick={handleGoBack}>Go Back</button>
          </div>
        </>
      ) : (
        <p>Loading contact data...</p>
      )}
    </div>
  );
};

export default SelectedContact;
