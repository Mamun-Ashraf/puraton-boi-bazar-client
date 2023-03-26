import React from 'react';

const Categories = ({ bookCategory }) => {
    const { categoryName } = bookCategory;
    return (
        <div className="card w-96 mx-auto bg-gradient-to-r from-lime-400 to-green-400 text-violet-600 shadow-xl mt-5">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">{categoryName}</h2>
            </div>
        </div>
    );
};

export default Categories;