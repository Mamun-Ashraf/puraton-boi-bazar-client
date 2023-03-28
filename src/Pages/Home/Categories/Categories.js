import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css';

const Categories = ({ bookCategory }) => {
    const { categoryName } = bookCategory;
    return (
        <div className="rounded-3xl w-96 mx-auto bg-gradient-to-r from-lime-400 to-green-400 text-slate-600 shadow-xl">
            <div className="py-6 categoryBg">
                <Link to='/'><h2 className="text-center text-xl font-bold">{categoryName}</h2></Link>
            </div>
        </div>
    );
};

export default Categories;