import React from 'react'
import { useParams } from 'react-router-dom';

const Category = () => {

    let {category} = useParams();
    return (
        <div>
            {category}
        </div>
    )
}

export default Category
