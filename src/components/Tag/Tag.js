import "./Tag.scss";

function Tag({ type }) {
	const tagLabel =
		type === "in-stock"
			? "In Stock"
			: type === "out-of-stock"
			? "Out Of Stock"
			: "";

	return type && <span className={"tag " + type}>{tagLabel}</span>;
}

export default Tag;
