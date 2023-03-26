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
        <div className='mb-8 text-center'>
            <h2 className='font-bold text-2xl text-sky-500 mb-20'>Filter By Following Categories:</h2>
            {
                bookCategories.map(bookCategory => <Categories
                    key={bookCategories.id}
                    bookCategory={bookCategory}
                ></Categories>)
            }
        </div>
    );
};

export default BookCategories;