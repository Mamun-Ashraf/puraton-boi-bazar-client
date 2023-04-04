import React from 'react';
import pageNotFound from '../../Assets/pageNotFound.jpg';

const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center h-[800px]'>
            <img src={pageNotFound} alt="" />
        </div>
    );
};

export default PageNotFound;