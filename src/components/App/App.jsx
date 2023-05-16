import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { ContactForm, ContactList, React, Filter } from 'components/App/index';

import { Container, Title, SubTitle } from 'components/App/App.styled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />

      <ContactList />
    </Container>
  );
};

export default App;
