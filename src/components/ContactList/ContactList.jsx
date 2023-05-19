import { useSelector } from 'react-redux';

import { selectContacts, selectStatusFilter } from '../../redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

import {
  ContactListContainer,
  ContactsList,
  ContactNotification,
} from 'components/ContactList/ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ContactListContainer>
      {contacts.length !== 0 ? (
        <ContactsList>
          {getFilteredContacts().map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ContactsList>
      ) : (
        <ContactNotification>
          You don't have any contacts in your phonebook
        </ContactNotification>
      )}
    </ContactListContainer>
  );
};

export default ContactList;
