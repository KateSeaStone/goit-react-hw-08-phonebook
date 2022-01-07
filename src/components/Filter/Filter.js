import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/Contacts/contacts-actions";
import { getFilter } from "../../redux/Contacts/contacts-selectors";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className="form-group mb-2">
      <label>
        Find contact by name
        <input
          className="form-control"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
