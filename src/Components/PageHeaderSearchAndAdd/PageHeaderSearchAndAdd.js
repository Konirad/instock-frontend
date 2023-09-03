import "./PageHeaderSearchAndAdd.scss";
import Button from "../Button/Button";
import Search from "../Search/Search";

import { Link } from "react-router-dom";

function PageHeaderSearchAndAdd({ addButtonText, addButtonPath, addButtonFunction }) {
    return (
        addButtonText && (
            <div className="search-and-add__container">
                <Search />
                <Link to={addButtonPath}>
                    <Button
                        className="button"
                        text={addButtonText}
                        style="primary"
                        icon="+"
                        onClick={addButtonFunction}
                    />
                </Link>
            </div>
        )
    );
}

export default PageHeaderSearchAndAdd;
