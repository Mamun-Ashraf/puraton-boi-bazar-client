import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';
import BookingModal from './BookingModal/BookingModal';

const Books = () => {
    const [bookItems, setBookItems] = useState(null);
    const books = useLoaderData();
    const { categoryName, categoryBooks } = books;
    return (
        <div>
            <h2 className='font-bold text-xl text-sky-500 text-center mb-12'>Books of {categoryName}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categoryBooks.map((categoryBook, idx) => <Book
                        key={idx}
                        categoryBook={categoryBook}
                        setBookItems={setBookItems}
                    ></Book>)
                }
            </div>
            {
                bookItems &&
                <BookingModal
                    bookItems={bookItems}
                    setBookItems={setBookItems}
                ></BookingModal>
            }
        </div>
    );
};

export default Books;