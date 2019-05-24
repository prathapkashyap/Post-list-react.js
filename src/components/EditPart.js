import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class EditPart extends Component {
    state={
        userid:this.props.realdata[0].userid,
        id:this.props.realdata[0].id,
        title:this.props.realdata[0].title,
        body:this.props.realdata[0].body

    }
   handleChange=(e)=>{
      this.setState({
          [e.target.id]:e.target.value
      })
   }
   handleSubmit=(e)=>{
       console.log(this.state.title);
    
    this.props.handleUpdate(this.state.title,this.state.body)
   }
   
    
    render() {
        return (
            <div className="container">
               <h4>
                   User ID : {this.state.userid}
               </h4>
               <h4>
                   Post ID : {this.state.id}
               </h4>
                <h4> Title </h4>
               <textarea id="title" value={this.state.title} style={{fontSize:"20px"}} onChange={this.handleChange}/>

               <h4> Description </h4>
               <textarea rows="4" id="body" value={this.state.body} style={{fontSize:"20px" }}  onChange={this.handleChange}/>
           <NavLink to="/update"> 
                <button className="btn" onClick={this.handleSubmit}> Submit</button>
           </NavLink>
            </div>
        )
    }
}
