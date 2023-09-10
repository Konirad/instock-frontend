import "./Search.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";

function Search() {
	return (
		<div className="search">
			<input className="search__input" type="text" placeholder="Search..." />
			<img className="search__icon" src={searchIcon} alt="search icon" />
		</div>
	);
}

export default Search;
