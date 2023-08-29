import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import { Link } from "react-router-dom"
import "./MainHeader.scss"



function MainHeader(props) {
  return (
    <div className="details__header">
      <Link to=".." relative="path">
        <div className={props.backButton}>
          <img src={backArrow} />
        </div>
      </Link>
      <h1 className="details__headerText">{props.text}</h1>
    </div>
  );
}

export default MainHeader;