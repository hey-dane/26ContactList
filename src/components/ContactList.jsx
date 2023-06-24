import { useState, useEffect } from "react";
import { ContactRow } from "./ContactRow";
import "./styles.css";

export const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table className="list-table">
      <thead>
        <tr>
          <th colSpan="4" className="table-heading">
            Code With
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="contact-headers">Name</td>
          <td className="contact-headers">Username</td>
          <td className="contact-headers">Email</td>
          <td className="contact-headers">Website</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
