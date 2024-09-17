import React, { useEffect, useRef, useState } from 'react'
import { sidebarData } from '../../database/data';
import { useParams } from 'react-router-dom';
import SideNavbarCategory from './SideNavbarCategory';

const SideNavbarCategoryList = ({query}) => {
    const categoriesList = getFilteredCategoryList(query);
    const { category } = useParams(); // Get the category from URL params
    const listRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        if (category !== undefined) {
        setSelectedCategory(category);
        }
    }, [category]);

    if (categoriesList.length === 0) {
        return (
        <div className="dark:text-gray-200 text-gray-500 text-lg text-center py-2">
            No Links Found
        </div>
        );
    }


    return (
        <ul
            data-custom="restrict-click-outside"
            ref={listRef}
            className="relative w-full flex flex-grow flex-col sc overflow-y-scroll scrollColorDarkMobile pr-4"
        >
            {categoriesList.map((categoryData) => (
                <SideNavbarCategory
                    listRef={listRef}
                    key={categoryData.category}
                    categoryData={categoryData}
                    expand={query.length > 0 || selectedCategory === categoryData.category}
                />
            ))}
        </ul>
    )
}

const getFilteredCategoryList = (query) => {
    const filteredResults = sidebarData.filter((sidebarItem) =>
        sidebarItem.subcategory.some((subCategory) =>
            matchSearch(subCategory, query)
        )
    );
    const mappedResults = filteredResults.map((sidebarItem) => ({
        ...sidebarItem,
        subcategory: sidebarItem.subcategory.filter((subcategory) =>
            matchSearch(subcategory, query)
        ),
    }));
  
    return mappedResults;
};
  
const matchSearch = (item, query) => {
    const itemName = item.name.toLowerCase();
    const matchingResources = item.resources.filter(
        (resource) =>
            resource.name.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
        query === '' ||
        itemName.includes(query.toLowerCase()) ||
        matchingResources.length > 0
    );
};

export default SideNavbarCategoryList
