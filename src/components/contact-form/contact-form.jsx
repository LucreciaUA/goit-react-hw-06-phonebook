import React, { Component } from "react";
import css from './contact-form.module.css'
import { nanoid } from "nanoid";

export class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    }
   nameChange = (e) => {
        this.setState({ name: e.target.value });
    };

  numberChange = (e) => {
        this.setState({ number: e.target.value });
  };
    
addContact = (e) => {
        e.preventDefault();
    const { name, number } = this.state;
    
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.addContact(newContact);

    this.setState({
      name: '',
      number: '',
    });
  };

    render(){
        return (<form onSubmit={this.addContact}>
                <label htmlFor="name">Name</label><br />
                    <input type="text" className={css.input} name="name" id="name" required value={this.state.name} onChange={this.nameChange}/><br />
                <label htmlFor="number">Phone</label><br />
                    <input type="tel" name="number" id="number" required value={this.state.number} onChange={this.numberChange} /><br />
                <button type="submit" className={css.submit}>Add contact</button>
                </form>)}
    
}