import React from 'react';
import SideFooter from './../SideFooter/SideFooter.css'
import home from '../../Assets/home.svg'
import menu from '../../Assets/menu.PNG'
import Bluemembers from '../../Assets/Bluemembers.PNG'


export default function SideFooterT(){
    return(
        <>
           <div className='SideNav'>
            <section className='SideNavImages'>
                <img src={home} alt='img' />
                <img src={Bluemembers} alt='img'className='Bluemembersimg' />
                <img src={menu} alt='img' className='menuImg' />
            </section>
           </div>
        </>
    )  
    
}