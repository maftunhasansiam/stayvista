/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItems = ({ address, label, icon: Icon }) => {
    return (
        <NavLink
            to={address}
            className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                }`
            }
        >
            <Icon className='w-5 h-5 r-2 '></Icon>

            <span className="'mx-4 font-medium">{label}</span>
        </NavLink >
    );
};
MenuItems.propTypes = {
    label: PropTypes.string,
    address: PropTypes.string,
    icon: PropTypes.elementType,

}
export default MenuItems;