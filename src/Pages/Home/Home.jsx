import React, { useEffect, useState } from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import FaqSection from './faqSection/FaqSection';
import Features from './features/Features';

const Home = () => {

    const [features, setFeatures] = useState([])

    useEffect(() => {
        fetch("features.json")
            .then((res) => res.json())
            .then(res => {
                setFeatures(res)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div>
           <div>
           <HomeBanner></HomeBanner>
           </div>
            {/* feature section */}

            <div className='text-center py-10 mt-8'>
                <h1 className='text-[40px]  md:text-5xl font-bold pb-8'>Features</h1>
                <h2 className='text-2xl md:text-4xl font-bold'>Discover Study Together</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    features.map(feature => <Features key={feature.id} feature={feature}></Features>)
                }
            </div>


            {/* faq section */}
            <div className='mt-10'>


            <div className='text-center py-10 mt-8'>
                <h1 className='text-[35px] md:text-5xl font-bold pb-10'>Frequently Asked Question</h1>
               
            </div>

            <FaqSection></FaqSection>
            </div>
        </div>
    );
};

export default Home;