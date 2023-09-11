import "./RequiredError.scss";
import errorImage from "../../assets/Icons/error-24px.svg"

function RequiredError() {
	return (
		<div className="error__container">
			<img className="error__image" src={errorImage} alt="Input error" /> <p className="inputTextBox--error">This field is required.</p>
		</div>
	);
}

export default RequiredError;
