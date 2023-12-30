import {useEffect, useState } from "react";
import css from './phonebook.module.css'
import { ContactForm } from "./contact-form/contact-form";
import { Filter } from "./filter/filter";
import { ContactList } from "./contact-list/contact-list";
import React from 'react';


const Phonebook = ()=> {

    const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem('contacts');
        return storedContacts ? JSON.parse(storedContacts) : [];
    })
    const [filter, setFilter] = useState('')

    const deleteContacts = (id) => {
        const newData = contacts.filter((contact) => contact.id !== id)

        setContacts(newData)
        console.log('Contact deleted:', id);
        console.log('Contacts:', contacts);
       
    }

   
    
    const inputChange = (e) => {
        setFilter(e.target.value );
    };
    

    const addContact = (newContact) => {
        
        const isExisting = contacts.some((contact) =>
        { return (contact.name.toLowerCase() === newContact.name.toLowerCase() || contact.number === newContact.number) })
        
        if (!isExisting) {
  

        const newData = [...contacts, newContact]
        

            setContacts( newData)
            console.log(contacts)
        }
        else {
            alert(`${newContact.name} is already in your contacts`)
        }
    }

 

    useEffect(() => { 
        console.log('Updating local storage:', contacts); 
        
            localStorage.setItem('contacts', JSON.stringify(contacts))
        

    },[contacts])

//componentDidMount() {
// const contacts = localStorage.getItem('contacts');
// const dataContacts = JSON.parse(contacts);
// if (dataContacts) {
//   this.setState({ contactss: dataContacts });
//  }
// }
// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contactss !== prevState.contactss) {
//      localStorage.setItem('contacts', JSON.stringify(this.state.contactss));
//    }
//  }
    
    
        
        const searchTerm = filter.toLowerCase();
        const filteredContacts = contacts.filter((contact) => {
            return (
                contact.name.toLowerCase().includes(searchTerm) ||
                contact.number.includes(searchTerm)
            );
        });
        return (
            <div className={css.wrapper}>
            <h1>Phonebook</h1>
                <ContactForm 
                    onAddContact={addContact} />
            <h2>Contacts</h2>
                <Filter filter={filter}
                inputChange={inputChange}/>
                <ContactList filteredContacts={filteredContacts}
                deleteContacts={deleteContacts}/>

            </div>
    )
}



export default Phonebook