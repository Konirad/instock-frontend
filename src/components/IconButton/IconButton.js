import "./IconButton.scss";

function IconButton({ actionType, actionFunction }) {
	return (
		actionType && (
			<div className={"icon-button " + actionType + "-icon"} onClick={actionFunction}></div>
		)
	);
}

export default IconButton;
