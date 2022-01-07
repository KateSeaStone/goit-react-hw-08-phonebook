import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/Contacts/contacts-operations";
import { getContacts } from "../../redux/Contacts/contacts-selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const onSubmit = (name, number) => dispatch(addContact({ name, number }));

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedName = contacts.map((contact) =>
      contact.name.toLowerCase()
    );

    if (normalizedName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    } else {
      onSubmit(name, number);
    }
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label>
          Name
          <input
            className="form-control"
            placeholder="Enter a name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
      </div>

      <div className="form-group mb-4">
        <label>
          Number
          <input
            className="form-control"
            placeholder="Enter a number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary mb-5">
        Add contact
      </button>
    </form>
  );
}
