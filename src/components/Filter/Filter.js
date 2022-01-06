import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/Contacts/contacts-actions";
import { getFilter } from "../../redux/Contacts/contacts-selectors";

import "./Filter.scss";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <label className="label__name">
      Find contact by name
      <input
        className="input__form"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
