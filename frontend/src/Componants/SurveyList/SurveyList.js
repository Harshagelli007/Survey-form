import React from "react";
import TopNav from './../TopNav/TopNav'
import SideFooterT from "../SideFooter/SideFooter";
import search from '../../Assets/search.svg'
import SurveyListStyle from '../SurveyList/SurveyListStyle.css';
import sort from '../../Assets/sort.svg';

export default function SurveyList(){
    return <>
        <TopNav/>
    <section className="MainSection">
        <SideFooterT/>
       <section> 
        <div className="SurveyListFirstLine">
        <h1>Survey List</h1>
        <div className="SearchDiv">
            <img src={search} className="searchImg"/>
        </div>
        <div className="filterDiv">
            <img src={sort} alt="sortimg"/>
            <button>CREATE</button>
        </div>
        </div>
       </section>
    </section>
       
    </>
}