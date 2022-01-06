import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import "./ContactList.scss";
import { getFilteredContacts } from "../../redux/Contacts/contacts-selectors";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/Contacts/contacts-operations";

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = (id) => dispatch(deleteContact(id));

  return (
    <ul className="contactList">
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
