import React, {Component} from 'react';
import QuickSearchDisplay from './QuickSearchDisplay';

const quickUrl = "http://localhost:8901/mealtype";

class QuickSearch extends Component {
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }
    render(){
        return(
          <div className="row mb-5 pl-3 d-flex justify-content-center">
               <QuickSearchDisplay mealData={this.state.mealType}/>
           </div>
        )
    }

    componentDidMount(){
        fetch(quickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;

