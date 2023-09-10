import "./PageHeaderSearchAndAdd.scss";
import Button from "../Button/Button";
import Search from "../Search/Search";

import { Link } from "react-router-dom";

function PageHeaderSearchAndAdd({
    addButtonText,
    addButtonPath,
    addButtonFunction,
}) {
    return (
        addButtonText && (
            <div className="search-and-add__container">
                <Search />
                <Link to={addButtonPath}>
                    <Button
                        text={addButtonText}
                        style="primary add-button"
                        icon="+"
                        onClick={addButtonFunction}
                    />
                </Link>
            </div>
        )
    );
}

export default PageHeaderSearchAndAdd;
