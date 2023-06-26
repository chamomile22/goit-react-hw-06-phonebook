import { useState } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const [filter, setFilter] = useState('');

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  // const getFilteredContacts = (() => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // })();

  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <Filter value={filter} onChange={handleFilterChange} />
      )}
      {contacts.length > 0 ? <ContactList /> : <p>No contacts here</p>}
      <ToastContainer autoClose={2000} />
    </>
  );
};
