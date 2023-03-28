import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';

const BookCategories = () => {
    const [bookCategories, setBookCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setBookCategories(data))
    }, [])
    return (
        <div className='mb-8'>
            <h2 className='font-bold text-2xl text-sky-500 mb-20 text-center'>Filter By Following Categories:</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    bookCategories.map(bookCategory => <Categories
                        key={bookCategories.id}
                        bookCategory={bookCategory}
                    ></Categories>)
                }
            </div>
        </div>
    );
};

export default BookCategories;