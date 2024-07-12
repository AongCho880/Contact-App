import React, { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    const retrieveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return retrieveContacts ? JSON.parse(retrieveContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    const newContact = { id: uuidv4(), ...contact };
    setContacts([...contacts, newContact]);
  };

  const removeContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id!== id));
  };

  return (
    <Fragment>
      <div className='ui container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
    </Fragment>
  );
}

export default App;
