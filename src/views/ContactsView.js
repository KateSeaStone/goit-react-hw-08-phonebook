import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import { fetchContacts } from "../redux/Contacts/contacts-operations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts), [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
