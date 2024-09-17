import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useFilterDB from '../hooks/useFilterDB';
import { usePagination } from '../hooks/usePagination';
import TopBar from '../components/TopBar';
import CardsList from '../components/CardsList';
import ComingSoon from '../components/ComingSoon';
import Pagination from '../components/Pagination';

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
            <div
                data-custom="restrict-click-outside"
                className="relative min-h-[calc(100%-68px)] w-full  pb-4 md:min-h-[calc(100%-76px)] md:pl-5 lg:px-10 md:pt-2"
            >
                {content}
                <div className="min-w-full h-10 py-5" />
                    <Pagination
                        toporbottom={toporbottom}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        numberOfCards={numberOfCards}
                    />
            </div>
        </>
    )
}

export default Subcategory
