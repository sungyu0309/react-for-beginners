import PropTypes from "prop-types";
import "./style.css";

function Button({ text }) {
  return <button className="btn">{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
