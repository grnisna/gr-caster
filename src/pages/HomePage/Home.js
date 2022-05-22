import React from 'react';

import Banner from '../../components/HomePageSection/Banner';
import BusinessSummary from '../../components/HomePageSection/BusinessSummary';
import Tools from '../../components/HomePageSection/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;