import "./TableLink.scss";
import rightArrowIcon from "../../assets/Icons/chevron_right-24px.svg";

import { Link } from "react-router-dom";

function TableLink({ linkText, linkPath }) {
    return (
        linkPath && (
            <Link className="table-link" to={linkPath}>
                <div className="table-link__container">
                    {linkText}
                    <div className="table-link__image-arrow">
                    <img src={rightArrowIcon} alt="Right Arrow Icon" />
                    </div>
                    
                </div>
            </Link>
        )
    );
}

export default TableLink;
