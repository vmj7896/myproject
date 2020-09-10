import React from 'react';
import {Link} from 'react-router-dom';

import Pagination from 'react-js-pagination';

const DetailDiaplay = (props) => {
    console.log(props)

    const renderTable = ({restdata}) => {
        if(restdata){
            return restdata.map((item) => {
                return(
                    <tr>
                        <td><Link to={`/rest/${item._id}`}>{item.name}</Link></td>
                        <td>{item.locality}</td>
                        <td>{item.Cuisine[0].name},{item.Cuisine[1].name}</td>
                        <td>{item.type[0].name},{item.type[1].name}</td>
                        <td>{item.cost}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container ">
            <center><h3>Restaurants List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Locality</th>
                        <th>Cuisine</th>
                        <th>Meal</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                {renderTable(props)}
                </tbody>
                
            </table>
        </div>
    )
}

export default DetailDiaplay;