import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css';

const Categories = ({ bookCategory }) => {
    const { _id, categoryName } = bookCategory;
    return (
        <div className="text-slate-600">
            <div className="category-bg bg-gradient-to-r from-lime-400 to-green-400 p-2 my-3 mr-3 rounded-lg">
                <Link to={`/category/${_id}`}><h2 className="text-lg font-bold text-center">{categoryName}</h2></Link>
            </div>
        </div>
    );
};

export default Categories;