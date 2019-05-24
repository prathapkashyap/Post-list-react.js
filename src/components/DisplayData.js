import React from 'react'
import {NavLink} from 'react-router-dom';
import EditPart from './EditPart'
const  DisplayData=({data,EditMethod})=> {
  
    
    const handleEdit=(dataReceived)=>{
       // console.log('handle edit part')
        //console.log(dataReceived);
        EditMethod(dataReceived);
    }
    //the prop sent from the getdata is used to set each one of the post here using the map function
    var datalist=data.map((eachone)=>{
        return(
            <div key={eachone.id} >
            <h3> {eachone.title}</h3>
            <p style={{fontSize:"20px"}}>{eachone.body}</p>
            <NavLink to={"/edit/"+eachone.id}>
            <button className="btn blue " onClick={()=>handleEdit(eachone)} style={{margin:15}}> Edit   </button>
            </NavLink>
            <NavLink to="/delete">

            <button className="btn red " style={{margin:15}}  > Delete</button>
            </NavLink>
            <hr style={{border:"0.5px solid grey"}}/>
            </div>
        )
    })
    return (
        
        <div>
            {datalist}
            
        </div>
        

        
    )
}
export default DisplayData;

