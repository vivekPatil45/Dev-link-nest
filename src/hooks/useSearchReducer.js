import { useReducer } from "react";
import { useLocation } from "react-router-dom"; // For React Router, use `useLocation` instead of `useRouter`
import { searchbarReducer } from "../components/searchbar/SearchbarReducer";


export const useSearchReducer = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialQuery = queryParams.get('query') || ''; // Gets the 'query' parameter from the URL

    const initialState = {
        searchQuery: initialQuery,
        categoryQuery: initialQuery,
        searchQueryIsValid: true,
        showSuggestions: false,
    };

    return useReducer(searchbarReducer, initialState);
};
