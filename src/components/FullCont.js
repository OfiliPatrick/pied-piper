import React, { Component } from 'react';
import MainCont from './MainCont';
import Footer from './Footer';
import pipes from '../images/12.jpg';

class FullCont extends Component {
    render() {
        return (
            <div className="image-container set-full-height" style= {{backgroundImage: `url(${pipes})`}}>
                <MainCont />
                <Footer/>
            </div>
        );
    }
}

export default FullCont;
