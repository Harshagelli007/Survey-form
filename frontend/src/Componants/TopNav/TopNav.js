import React from 'react';
import SurveyImp from './SurveyImp.css'
import next from '../../Assets/next.svg';
import Harsha_gelli from '../../Assets/Harsha_gelli.jpg';


export default function Survey(){
    return(
        <>
           <div className='TopNav'>
            <h3 className='Logo'>LOGO</h3>
            <section className='ImageSection'>
                
                <img src={Harsha_gelli} alt='Img' className='ImageSubSection'/>
                <img src={next} alt='next' className='NextButton'/>
            </section>
            </div>
        </>
    )  
    
}