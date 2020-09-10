import React from 'react';
import Footer from './Footer';
import QuickSearch from './QuickSearch';
import Search from './Search';
import "./Home.css";

//functional Component
const Home = (props) => {
    return(

    <div>
        
        <div className="container-fluid cust-cont cust-top-container">
            <div className="Logo m-auto">
                <p id="Logo_text">e!</p>
            </div>

           <Search history = {props.history}/>
        
        </div>
        <div className="container-fluid">
            <QuickSearch/>
            <Footer year="2020" month="September"/>
        </div>
    </div>
    )
}

export default Home;

