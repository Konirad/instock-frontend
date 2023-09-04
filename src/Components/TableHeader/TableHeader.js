import "./TableHeader.scss";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function TableHeader({ label, sortable }) {
	return (
		<div className="table-header">
			<h4 className="table-header__label">{label}</h4>
			{sortable === "true" && <img className="table-header__sort-icon" src={sortIcon} alt="sort icon" />}
		</div>
	);
}

export default TableHeader;
