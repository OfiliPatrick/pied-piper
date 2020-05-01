import React from 'react';
import MainCont from './MainCont';
import Footer from './Footer';
import pipes from '../images/12.jpg';


const FullCont = () => {
    return (
        <div className="image-container set-full-height" style= {{backgroundImage: `url(${pipes})`}}>
                <MainCont />
                <Footer/>
            </div>
    );
}

export default FullCont;
