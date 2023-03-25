import React from 'react';
import library from '../../../Assets/library.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mb-8 relative '>
            <div className='banner-img'>
                <img src={library} alt="" className='w-full' />
            </div>
            <div className='absolute right-2 top-1/3 sm:right-12 sm:top-1/4'>
                <h2 className="text-5xl font-bold">
                    <span className='text-yellow-400'>A Bag Of</span>
                    <br />
                    <span className='text-pink-600'>Books</span>
                    <br />
                    <span className='text-yellow-500'>Only for $5</span>
                </h2>
            </div>
        </div>
    );
};

export default Banner;