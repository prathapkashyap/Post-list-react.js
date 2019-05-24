import React, { Component } from 'react'
import axios from 'axios';
import DisplayData from './DisplayData'
export default class GetDataPart extends Component {

    //define a state to hold all the values of the data that we get from the webpage
    state={
        realdata:[]

    }
    //when ever the page is reloaded thisis the first method to run and it will send a getrequest 
    //to that webpage to get all the data
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
            
            var response=data.data;
            
            //define these arrays so that the can be set to the state at the end
            var realdata=[]
            response.forEach((data)=>{

                
                var eachdata={
                userid:data.userId,
                id:data.id,
                title:data.title,
                body:data.body
                }
                realdata.push(eachdata);

                              
            })
           
            this.setState({
                realdata
            });
            
        });
    }
    
    render() {

        
        return (
            <div className="container">
                <DisplayData data={this.state.realdata} EditMethod={this.props.EditMethod}/>
            </div>
        )
    }
}
