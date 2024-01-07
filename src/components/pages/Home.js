import React from 'react'
import '../../App.css'
import MainSection from '../MainSection copy'
import Packages from '../Packages';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <MainSection />
            <Packages/>
            <Footer/>
        </>
    );
}

export default Home;