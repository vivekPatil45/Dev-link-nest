import React, { useContext } from 'react'
import { GlobalContext } from '../../contextAPI';
import { Link, useLocation } from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination';

const SideNavbarElement = ({ category, subcat }) => {

    const { name, url } = subcat;
    const { closeNav } = useContext(GlobalContext);
    const { handlePageChange } = usePagination();
    const location = useLocation();
    const path = `/${category}${url}`;

    return (
        <Link
            to={path} // Updated from href to to for React Router
            aria-label="Side Navbar Elements"
            onClick={() => {
                handlePageChange(1);
            }}
            className={`${
                location.pathname === path
                ? 'border-l-4 border-theme-primary text-theme-secondary dark:text-theme-primary'
                : 'text-gray-400'
            } collapse w-full text-start pl-3 hover:text-theme-secondary dark:hover:text-violet-300 
            focus-visible:outline-none focus-visible:ring focus-visible:ring-theme-primary focus-visible:rounded-lg`}
        >
            <div
                className="ml-2 py-2 text-base font-medium font-sans capitalize transition-all duration-300 hover:pl-2 dark:border-theme-secondary"
                onClick={closeNav}
            >
                {name}
            </div>
        </Link>
    )
}

export default SideNavbarElement
