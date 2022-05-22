import React from 'react';

import Banner from '../../components/HomePageSection/Banner';
import BusinessSummary from '../../components/HomePageSection/BusinessSummary';
import Reviews from '../../components/HomePageSection/Reviews';
import Tools from '../../components/HomePageSection/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;