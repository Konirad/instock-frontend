import "./MainHeader.scss";
import PageHeaderSearchAndAdd from "../PageHeaderSearchAndAdd/PageHeaderSearchAndAdd";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MainHeader({ title, backButton, searchAndAdd, addButtonText, addButtonPath }) {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<div className="mainHeader__container">
			<div className="mainHeader__title" onClick={handleBack}>
				{backButton === "true" && <img src={backArrow} alt="Back Arrow" />}
				<h1 className="mainHeader__title">{title}</h1>
			</div>
			{searchAndAdd === "true" && <PageHeaderSearchAndAdd addButtonText={addButtonText} addButtonPath={addButtonPath} />}
		</div>
	);
}

export default MainHeader;
