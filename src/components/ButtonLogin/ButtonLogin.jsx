import PropTypes from "prop-types";
import styles from "./ButtonLogin.module.scss";

ButtonLogin.propTypes = {
  onClick : PropTypes.string,
  cta : PropTypes.string
}

export default function ButtonLogin (props){
  return (
    <button
    type="button"
    className = { styles.buttonLogin__item }
    style = {{ backgroundColor: props.cta === "Entrar" ? "#001A3D" : "#00BEDD" }}
    onClick = { props.onClick }>
      { props.cta }
    </button>
  );
}
