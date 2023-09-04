import "./MainHeader.scss";
import PageHeaderSearchAndAdd from "../PageHeaderSearchAndAdd/PageHeaderSearchAndAdd";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function MainHeader({ title, backButton, searchAndAdd, addButtonText, addButtonPath }) {
  return (
    <div className="mainHeader__container">
      <div className="mainHeader__title">
        {backButton === "true" && (
          <Link to=".." relative="path">
            <img src={backArrow} alt="Back Arrow" />
          </Link>
        )}
        <h1 className="mainHeader__title">{title}</h1>
      </div>
      {searchAndAdd === "true" && (
        <PageHeaderSearchAndAdd addButtonText={addButtonText} addButtonPath={addButtonPath} />
      )}
    </div>
  );
}

export default MainHeader;
