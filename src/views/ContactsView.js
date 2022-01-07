import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import "../styles/ContactsView.scss";

export default function ContactsPage() {
  return (
    <div className="contactsViewContainer">
      <ContactForm />

      <ContactList />
      <Filter />
    </div>
  );
}
