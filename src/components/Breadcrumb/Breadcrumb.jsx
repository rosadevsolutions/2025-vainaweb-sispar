import { useNavigate } from "react-router-dom"
import "./Breadcrumb.module.scss"

export default function Breadcrumb(props) {
  const navigate = useNavigate()
  const irHome = () => {
    navigate("/")
  }

  return (
    <div className="breadcrumb__wrapper">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__item--home" onClick={ irHome }>Home</li>
        <li className="breadcrumb__item--page">
          <p>{ props.actualPage }</p>
        </li>
      </ul>
    </div>
  );
}
