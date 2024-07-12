import React from "react";

import ContactCard from "./ContactCard";

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContacts = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} getContactId={deleteContactHandler} />
        );
    });


    return (
        <div className="ui celled list">
            <h3>Contact List</h3>
            {renderContacts}
        </div>
    );
}

export default ContactList;