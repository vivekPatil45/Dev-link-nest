import React, { lazy, Suspense, useEffect, useRef } from 'react'
import { Icons } from '../icons';
import { sidebarData } from '../../database/data';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchbarSuggestions } from './SearchbarSuggestions';
import { ErrorMessage } from './ErrorMessage';

const ShortcutKey = lazy(() => import('./ShortcutKey'));


export const subcategoryArray = sidebarData
    .map((item) => item.subcategory.flat())
    .flat()

    
const searchOptions = subcategoryArray;
const SEARCH_ERROR_MSG = "Please enter a valid search query";


const Searchbar = ({
    dispatchSearch,
    searchQuery,
    showSuggestions,
    searchQueryIsValid,
    inputRef,
}) => {
    const formRef = useRef(null);
    const navigate = useNavigate(); // React Router's `useNavigate` to replace `router.push`
    const location = useLocation(); // For accessing query params like `router.query` equivalent
    const suggestions = getFilteredSuggestions(searchQuery);


    const handleSearchChange = (e) => {
        dispatchSearch({
            type: "search_query_change",
            searchQuery: e.target.value
        });

        if (
            !e.target.value &&
            location.pathname !== "/" &&
            location.pathname.substring(1, 7) === "search"
        ) {
            searchQuery = "";
            navigate("/"); // Replace Next.js's `router.push` with React Router's `navigate`
        }
    };
    const handleSuggestionClick = (searchQuery) => {
        dispatchSearch({ type: "suggestion_click", searchQuery: searchQuery.name });
        const { category } =
            sidebarData.find((item) =>
                item.subcategory.some((subCat) => subCat.name === searchQuery.name)
            ) || { category: "" };

        navigate(`/${category}${searchQuery.url}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchSearch({ type: "submit" });
        const cleanedSearchQuery = searchQuery.toLowerCase().trim();
        if (cleanedSearchQuery !== "") {
        const { category } =
            sidebarData.find((item) =>
            item.subcategory.find((subCat) => subCat.name === cleanedSearchQuery)
            ) || { category: "" };

        if (category !== "") {
            navigate(`/${category}/${cleanedSearchQuery}`);
        } else {
            navigate({
            pathname: "/search",
            search: `?query=${searchQuery}`, // Use `search` to pass query params
            });
        }
        }
    };

    useEffect(() => {
        const handleClickOutsideDropdown = (e) => {
            if (
                e.target &&
                e.target.closest("[data-custom='restrict-click-outside']") !== null
            ) {
                return;
            }
            if (formRef.current.contains(e.target)) return;
            dispatchSearch({ type: "close_suggestions" });
        };

        document.addEventListener("mousedown", handleClickOutsideDropdown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideDropdown);
        };
    }, [dispatchSearch]);

    return (
        <form
            data-custom="restrict-click-outside"
            noValidate
            role="search"
            ref={formRef}
            onSubmit={handleSubmit}
        >   
            <div className=' relative'>
                <div className="relative w-full h-12 flex items-center justify-between  border border-theme-secondary/25 dark:border-none rounded-lg">
                    <label htmlFor="simple-search" className="sr-only">
                        Quick search
                    </label>

                    <input
                        ref={inputRef}
                        type="text"
                        id="simple-search"
                        name="simple-search"
                        className="peer h-12 w-full flex items-center justify-start pl-[46px] pr-4 py-3 bg-slate-100 bg-opacity-50 dark:bg-zinc-400 dark:bg-opacity-20 rounded-[10px] outline-none hover:shadow-input-hover focus:shadow-input-focus dark:hover:shadow-input-hover-dark dark:focus:shadow-input-focus-dark"
                        placeholder="Quick search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        autoComplete="off"
                        required
                    />

                    <Icons.search className="h-5 w-5 absolute top-[14px] left-4 text-gray-400 peer-focus:text-primary dark:peer-focus:text-slate-100" />
                    <Suspense fallback={<div>Loading...</div>}>
                            <ShortcutKey />
                    </Suspense>
                </div>

                {suggestions.length > 0 && showSuggestions && (
                    <SearchbarSuggestions
                        suggestions={suggestions}
                        onSuggestionClick={handleSuggestionClick}
                    />
                )}
            </div>
            {!searchQueryIsValid && <ErrorMessage>{SEARCH_ERROR_MSG}</ErrorMessage>}
        </form>
    )
}

export default Searchbar
const getFilteredSuggestions = (query) => {
    const normalisedQuery = query.trim().toLowerCase();
    if (normalisedQuery.length === 0) {
        return [];
    }
    const suggestions = searchOptions.filter((option) =>
        option.name.toLowerCase().includes(normalisedQuery)
    );

    return suggestions;
};