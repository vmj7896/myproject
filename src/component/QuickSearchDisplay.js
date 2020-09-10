import React from 'react';
import {Link} from 'react-router-dom';
import './QuickSearchDisplay.css';

const DisplaySearch = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                        <Link to={`/details/${item.mealtype}`}>
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={`/images/${item.name}.png`} />
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        {item.name}
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your day with exclusive food option
                                    </div>
                                </div>

                            </div>
                        </Link>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeding">
                    Quick Searches
                </p>
                <p className="quickSearchSubHeding">
                    Discover restaurants by type of meal
                </p>
                {listMeal(props)}
            </div> 
        </div>
    )
}

export default DisplaySearch;