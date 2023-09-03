import React from 'react';
import { Link } from "react-router-dom";
import search from "../../assets/Icons/search-24px.svg";
import './pageHeader.scss';
import { useNavigate } from "react-router-dom";
import Button from '../Button/Button';

function PageHeader({ title, searchPlaceholder }) {

    const navigate = useNavigate();
    
    const handleAddWarehouseClick = () => {
        navigate('../addwearhouse.js'); 
    };

    return (
        <div>
            <div className="warehouseList__header">
                <h1>{title}</h1>
                <div className="warehouseList__header__container">
                    <div className="warehouse__header__input-container">
                        <input
                            className="warehouse__header__input"
                            type="text"
                            placeholder={searchPlaceholder}
                        />
                        <img
                            className="warehouse__header__search-icon"
                            src={search}
                            alt="search icon"
                        />
                    </div>
                    <Link to="/addwarehouse">
                    <Button
                    className="button"
                    text="Add New Warehouse"
                   style="primary"
                   icon="+"
                  onClick={handleAddWarehouseClick}
                   />
                          
                      
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
