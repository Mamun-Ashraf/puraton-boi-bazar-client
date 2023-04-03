import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const books = useLoaderData();
    const { _id, categoryName, categoryBooks } = books;
    return (
        <div>
            <h2 className='font-bold text-xl text-sky-500 text-center mb-12'>Books of {categoryName}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categoryBooks.map(categoryBook => <Book
                        key={_id}
                        categoryBook={categoryBook}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;