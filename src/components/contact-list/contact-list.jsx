import React from "react"; 
import css from './contact-list.module.css'
import { nanoid } from "nanoid";

export const ContactList = ({filteredContacts, deleteContacts}) => {
    return (
        <ul>
                        {filteredContacts.length > 0 ? (
                            filteredContacts.map((contact) => {
                                const { name, number } = contact;
                                return (
                                    <li key={nanoid()}>
                                         <span>{name} - {number}</span>
        
                                    <button type="button" className={css.delete} onClick={() => deleteContacts(contact.id)}>
                                        -</button>
                                    </li>
                                );
                            })
                        ) : (
                            <p>No contacts found.</p>
                        )}
                    </ul>
    )

}