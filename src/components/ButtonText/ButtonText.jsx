import PropTypes from "prop-types";
import styles from "./ButtonText.module.scss";

ButtonText.propTypes = {
  onClick : PropTypes.string,
  cta : PropTypes.string
}

export default function ButtonText (props){
  return (
    <button
    type="button"
    className = { styles.buttonText__item }
    onClick = { props.onClick }>
      { props.cta }
    </button>
  );
}
