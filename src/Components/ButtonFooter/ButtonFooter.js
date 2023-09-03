import "./ButtonFooter.scss"
import { Link } from "react-router-dom"



function ButtonFooter(props) {

    return (
        <div className="mainFooter__buttons">
        <Link to=".." relative="path"> <button className="button secondary">{props.Cancel}</button>
        </Link>
        <button type={props.actionButtonType} className="button primary">{props.actionButton}</button>
      </div>
    );
  }
  
  export default ButtonFooter;