import React,{Component} from 'react';

const locurl = "http://localhost:8901/location";
const resturl = "http://localhost:8901/restauranthome?city=";

class Search extends Component {
    constructor(){
        super()
        this.state={
            location:'',
            city:'',
            restaurents:''
        }
    }

    
    handleCity = (event) => {
        this.setState({restaurents:''})
        this.setState({city:event.target.value})
        var cityid = parseInt(event.target.value)
        sessionStorage.setItem('citiId',event.target.value)
        fetch(`${resturl}${cityid}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurents:data})
        })
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.name}
                    </option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option className="search" data-icon="glyphicon">
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }
       

    render(){
        return(
            <div className="container">
      <div className="container-fluid"><p id="find-rest">Find the Best restaurants, cafes and bars</p></div>
      <div className="container-fluid pt-5 pt-md-5 pt-lg-0">
         
                     <div id="inputboxes" className="row d-flex justify-content-center">
                
                    <select id="inputbox" className="inputbox col-10 col-sm-3"  placeholder="Please type a location" onChange={this.handleCity}>
                       {this.renderCity(this.state.location)}
                    </select>
                    <input list="restaurent" name="rests" id="rests" id ="inputbox" className=" ml-md-2 inputbox col-10 col-sm-3" onChange={this.handlerestaurantsearch} placeholder="&#xF002; Search for restaurants"/>

                    

                    <datalist id="restaurent">
                        {this.renderRest(this.state.restaurents)}
                    </datalist>
                    </div> 
               </div>
        </div>
        )
    }
    
    componentDidMount(){
       fetch(locurl,{method:'GET'})
       .then((res) => res.json())
       .then((data) => {
          
           this.setState({location:data})
       })
    }
    
}

export default Search;