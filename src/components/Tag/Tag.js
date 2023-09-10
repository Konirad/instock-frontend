import "./Tag.scss";

function Tag({ statusText }) {
	const statusClass =
		statusText === "In Stock"
			? "in-stock"
			: statusText === "Out of Stock"
				? "out-of-stock"
				: "";

	return (
		statusText && <span className={"tag " + statusClass}>{statusText}</span>
	);
}

export default Tag;
