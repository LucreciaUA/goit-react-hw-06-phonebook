import React, {useState } from "react";
import css from './contact-form.module.css'
import { nanoid } from "nanoid";

export const ContactForm = ({onAddContact})=>{

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  
  const nameChange = (e) => {
   setName(e.target.value);
    };

  const numberChange = (e) => {
      setNumber(e.target.value);
  };
    
const addContact = (e) => {
        e.preventDefault();
    
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,      
    };
  console.log(newContact)
if (onAddContact) {
      onAddContact(newContact);
}
  setName('');
  setNumber('');

  };

  
        return (<form onSubmit={addContact}>
                <label htmlFor="name">Name</label><br />
                    <input type="text" className={css.input} name="name" id="name" required value={name} onChange={nameChange}/><br />
                <label htmlFor="number">Phone</label><br />
                    <input type="tel" name="number" id="number" required value={number} onChange={numberChange} /><br />
                <button type="submit" className={css.submit}>Add contact</button>
                </form>)
    
}