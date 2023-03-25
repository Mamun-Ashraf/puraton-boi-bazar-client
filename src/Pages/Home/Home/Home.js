import React from 'react';
import AdvertisedBooks from '../AdvertisedBooks/AdvertisedBooks';
import Banner from '../Banner/Banner';
import BookCategories from '../BookCategories/BookCategories';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedBooks></AdvertisedBooks>
            <BookCategories></BookCategories>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;