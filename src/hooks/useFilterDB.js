import { useLocation } from 'react-router-dom'; 
import { database } from '../database/data';
import { useResults } from './ResultsContext';


const useFilterDB = (subcategory) => {
    const location = useLocation(); // React Router hook to get the current path
    const { results } = useResults(); // Use the context for results
    
    
  // Extracting the subcategory from the path
    let pageCategory = subcategory;
    
    
    if (typeof window !== 'undefined') {
        pageCategory = location.pathname.slice(1); // Use pathname instead of router.asPath
    }

  // Filtering the database with the subcategory, resulting in an array of arrays
    const filterSubCat = database?.map((item) => {
        return item?.filter((cat) => cat.subcategory === subcategory);
    });

  // Filter out empty arrays from the filterSubCat result
    const filterDB = filterSubCat?.filter((item) => item.length !== 0);

  return {
    filterSubCat,
    filterDB,
    results,
    pageCategory,
  };
};

export default useFilterDB;
