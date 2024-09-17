import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useFilterDB from '../hooks/useFilterDB';
import { usePagination } from '../hooks/usePagination';

const Subcategory = () => {
    const location = useLocation();
    const { pathname } = location;
    const pathParts = pathname.split('/').filter(Boolean);
    const subcategory = pathParts[pathParts.length - 1] || '';
    const { filterDB, pageCategory } = useFilterDB(subcategory);
    const title = `LinksHub - ${pageCategory[0].toUpperCase() + pageCategory.slice(1)}`;
    const numberOfCards = filterDB.length > 0 ? filterDB[0].length : 0;

    const { totalPages, currentPage, startIndex, endIndex, handlePageChange } =usePagination(numberOfCards);
    let content;
    let filterData;

    if (filterDB && filterDB.length > 0) {
        filterData = filterDB[0].slice(startIndex, endIndex);
        content = <CardsList cards={filterData} />;
    } else {
        content = <ComingSoon />;
    }
    const toporbottom = true;

    return (
        <>
            <TopBar/>
        </>
    )
}

export default Subcategory
