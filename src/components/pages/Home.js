import React from 'react'
import '../../App.css'
import MainSection from '../MainSection'
import Packages from '../Packages';
import Footer from '../Footer';
import ServiceSection from '../ServiceSection';
import FadeInBlack from '../FadeInBlack';
import FadeOutBlack from '../FadeOutBlack';

function Home(props){
    return(
        <>
            <MainSection />
            <FadeInBlack />
            <ServiceSection />
            <FadeOutBlack />
            <Packages packages={props.packages}/>
            <Footer/>
        </>
    );
}

export default Home;