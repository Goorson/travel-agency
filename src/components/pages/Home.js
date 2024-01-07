import React from 'react'
import '../../App.css'
import MainSection from '../MainSection copy'
import Packages from '../Packages';
import Footer from '../Footer';
import ServiceSection from '../ServiceSection';
import FadeInBlack from '../FadeInBlack';
import FadeOutBlack from '../FadeOutBlack';

function Home(){
    return(
        <>
            <MainSection />
            <FadeInBlack />
            <ServiceSection />
            <FadeOutBlack />
            <Packages/>
            <Footer/>
        </>
    );
}

export default Home;