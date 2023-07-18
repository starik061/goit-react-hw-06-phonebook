// import { nanoid } from 'nanoid';
import { nanoid } from '@reduxjs/toolkit';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
export const App = () => {
  const contacts = useSelector(store => {
    return store.contacts;
  });
  const filter = useSelector(store => {
    return store.filter;
  });

  const dispatch = useDispatch();

  console.log('🚀  filter:', filter);

  console.log('🚀  contacts:', contacts);

  const addContactFunction = formState => {
    const { name, number } = formState;
    const contact = { name, number, id: nanoid(4) };

    let isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameInContacts) {
      alert('Такое имя уже существует в контактах');
      return;
    }

    dispatch(addContact(contact));
  };

  const changeFilter = event => {
    dispatch(filter(event.target.value));
  };

  const deleteContact = contactId => {};

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm onAddContact={addContactFunction} />
      <h2>Contacts</h2>
      <Filter changeValue={changeFilter} value={filter} />
      <ContactsList
        contacts={filteredContacts}
        // onFilterChange={
        //   {
        //     /*this.updateInputState*/
        //   }
        // }
        onDeleteButton={deleteContact}
      />
    </>
  );
};
