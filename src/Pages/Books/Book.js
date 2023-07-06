import React from 'react';

const Book = ({ categoryBook, setBookItems }) => {
    const { bookName, authorsName, bookImage, sellersName, sellersEmail, sellersLocation, resalePrice, originalPrice, usingYears, postingTime, conditiontype, mobilenumber, description } = categoryBook;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <h2 className="card-title pl-5">Book Name : {bookName}</h2>
            <small className="font-bold pl-5 pb-5">Authors Name : {authorsName}</small>
            <figure><img src={bookImage} alt="" className='h-48' /></figure>
            <div className="card-body">
                <div className=''>
                    <p className='text-lg'><span className='text-lg font-bold'>Sellers Name :</span> {sellersName}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>Sellers Email :</span> {sellersEmail}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>Sellers Location :</span> {sellersLocation}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>Sellers Contact no. :</span> {mobilenumber}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>Original Price :</span> ${originalPrice}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>Resale Price :</span> ${resalePrice}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>Book Condition :</span> {conditiontype}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>Years of Use :</span> {usingYears}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>About Book :</span> {description}</p>
                    <p className='text-lg'><span className='text-lg font-bold'>Time at posted :</span> {postingTime}</p>
                </div>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="buying-modal"
                        className="btn btn-accent"
                        onClick={() => setBookItems(categoryBook)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Book;