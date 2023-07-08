import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';

const BookCategories = () => {
    const [bookCategories, setBookCategories] = useState([]);
    useEffect(() => {
        fetch('https://puraton-boi-bazar-server.vercel.app/categoryTitle')
            .then(res => res.json())
            .then(data => setBookCategories(data))
    }, [])
    return (
        <div className='mb-8 w-5/6 mx-auto md:w-full'>
            <h2 className='font-bold text-xl text-sky-500 mb-12'>Filter By Categories:</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    bookCategories.map(bookCategory => <Categories
                        key={bookCategory._id}
                        bookCategory={bookCategory}
                    ></Categories>)
                }
            </div>
        </div>
    );
};

export default BookCategories;