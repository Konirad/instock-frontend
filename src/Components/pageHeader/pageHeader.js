import React from 'react';
import { Link } from "react-router-dom";
import './pageHeader.scss';
import { useNavigate } from "react-router-dom";
import Button from '../Button/Button';
import Search from '../Search/Search';

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
                    <Search />
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
