import React from 'react';
import library from '../../../Assets/library.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mb-8 md:flex'>
            <div className='w-1/2'>
                <h2 className='text-5xl'>
                    <span className='text-orange-300'>The best place</span>
                    <br />
                    <span className='text-yellow-500'>for buying and selling</span>
                    <br />
                    <span className='text-green-400'>second hand books</span>
                </h2>
            </div>
            <div className='w-1/2'>
                <img src={library} alt="" />
            </div>
        </div>
    );
};

export default Banner;