import React from 'react';

const Book = ({ categoryBook }) => {
    const { bookName, bookImage, sellersName, sellersLocation, resalePrice, originalPrice, usingYears, postingTime } = categoryBook;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <h2 className="card-title pl-5">{bookName}</h2>
            <figure><img src={bookImage} alt="" className='h-48' /></figure>
            <div className="card-body">
                <p className='text-lg'>Sellers Name: {sellersName}</p>
                <p className='text-lg'>Sellers Location: {sellersLocation}</p>
                <p className='text-lg'>Original Price: ${originalPrice}</p>
                <p className='text-lg'>Resale Price: ${resalePrice}</p>
                <p className='text-lg'>Years of Use: {usingYears}</p>
                <p className='text-lg'>Time at posted: {postingTime}</p>
                <div className="card-actions justify-center">
                    <label htmlFor="buying-modal" className="btn btn-accent">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Book;