import PropTypes from "prop-types";

export const Input = ({
  name,
  value,
  type,
  placeholder,
  maxLength,
  handleChange,
  required,
}) => {
  return (
    <input
      aria-autocomplete="none"
      autoComplete="off"
      name={name}
      value={value}
      className="Input"
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      maxLength={maxLength}
      required={required}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email"]).isRequired,
  maxLength: PropTypes.number,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
};
