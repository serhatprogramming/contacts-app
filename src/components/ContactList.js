import { useState } from "react";

const ContactList = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2>Contact List</h2>
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search contacts"
      />
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filterContacts.map((contact, index) => (
            <tr
              key={contact.id}
              className={index % 2 === 0 ? "green-row" : "green-row-dark"}
            >
              <td>{contact.name}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
