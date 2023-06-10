import { useState } from "react";

import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    { name: "John Doe", id: 1, email: "johndoe@gmail.com" },
    { name: "Jane Smith", id: 2, email: "janesmith@gmail.com" },
    { name: "Michael Johnson", id: 3, email: "michaeljohnson@gmail.com" },
    { name: "Emily Davis", id: 4, email: "emilydavis@gmail.com" },
    { name: "David Brown", id: 5, email: "davidbrown@gmail.com" },
  ]);

  const handleSubmit = (newName, newEmail) => {
    if (newName.trim() !== "") {
      const newContact = { name: newName, email: newEmail, id: Date.now() };
      if (contacts.find((contact) => contact.name === newName)) {
        alert(`${newName} is already in contacts`);
      } else {
        setContacts([...contacts, newContact]);
      }
    }
  };

  return (
    <div className="contacts-app">
      <AddContact handleSubmit={handleSubmit} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
