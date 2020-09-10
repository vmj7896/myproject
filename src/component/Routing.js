import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Details from './mealtypeRest/Details';
import Header from './Header';
import Restaurent from './RestDetails/RestaurantDetails';
import OrderForms from './orders/forms';
import OrderDisplay from './orders/orderDisplay';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
               <Route path="/details/:id" component={Details}></Route>
                <Route path="/rest/:id" component={Restaurent}></Route>
                <Route path="/order/:id" component={OrderForms}></Route>
                <Route path="/orderDisplay" component={OrderDisplay}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;