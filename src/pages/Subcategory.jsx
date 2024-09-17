import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Subcategory = () => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <div>
            { pathname}
        </div>
    )
}

export default Subcategory
