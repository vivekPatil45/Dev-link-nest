import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { sidebarData } from '../database/data';
import CardsList from '../components/CardsList';
import { usePagination } from '../hooks/usePagination';
import Pagination from '../components/Pagination';

const Saved = () => {
    const [savedResources, setSavedResources] = useState([]);
    useEffect(() => {
        // Fetch all resources from the sidebarData
        const data = sidebarData.map((item) => item.subcategory).flat();
        const allResources = data.map((item) => item.resources).flat();
    
        // Fetch saved items from localStorage
        const saved = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    
        // Filter resources that are saved
        const filteredResources = allResources.filter((resource) => 
            saved.includes(resource.name)
        );
    
        setSavedResources(filteredResources);
    }, [savedResources]);

    const { currentPage, totalPages, startIndex, endIndex, handlePageChange } =usePagination(savedResources.length);
    const paginatedResources = savedResources.slice(startIndex, endIndex);

    return (
        <>
            <div className="p-2 sm:p-8">
            <h1 className="text-2xl font-medium">Saved Resources</h1>
            <p className="text-[#A6ABBF]">
                Your personalized collection of saved resources is available here.
            </p>
            </div>

            {savedResources.length > 0 ? (
                <div 
                    data-custom="restrict-click-outside"
                    className="relative min-h-[calc(100%-68px)] w-full  pb-4 md:min-h-[calc(100%-76px)] md:pl-5 lg:px-10 md:pt-2"
                >
                    <CardsList cards={paginatedResources} />
                    <div className="min-w-full h-10 py-5" />
                    <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                    />
                </div>
            ) : (
                <div className="flex min-h-[calc(100vh-256px)] justify-center items-center flex-col">
                    <h1 className="mt-5 text-2xl font-medium uppercase text-center">
                    No saved items yet!
                    </h1>
                    <p className="md:w-3/5 text-center mt-2">
                    Save your favorite resources to access them later.
                    </p>
                    <Link className="mt-5" to={'/'}>
                    <button className="bg-[#714EFF] text-white flex p-3 rounded-lg items-center">
                        Go to Home <FaArrowRight className="ml-2" />
                    </button>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Saved