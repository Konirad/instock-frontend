import "./ButtonFooter.scss";
import { useNavigate } from "react-router-dom";

function ButtonFooter(props) {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("..");
  };

  return (
    <div className="buttonFooter">
      <button className="button secondary buttonFooter__button" onClick={handleCancel}>{props.Cancel}</button>
      <button type={props.actionButtonType} className="button primary buttonFooter__button">{props.actionButton}</button>
    </div>
  );
}

export default ButtonFooter;
