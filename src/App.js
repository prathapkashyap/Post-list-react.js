import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import GetDataPart from './components/GetDataPart'
import DeletePost from './components/DeletePost';
import EditPart from './components/EditPart';
import Update from './components/Update'
export default class  App extends Component{

  state={
   realdata:[],
   updatetitle:'',
   updatebody:''
  }

  EditMethod=(data)=>{
    
    //console.log('in app',data)
    var currentData={
      userid:data.userid,
      id:data.id,
      body:data.body,
      title:data.title
    };
    var realdata=[currentData];
    this.setState({
      realdata
    })
  }

  handleUpdate=(title,body)=>{
    this.setState({
      updatetitle:title,
      updatebody:body
    })
  } 
  
  render(){
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Route exact path='/' render={(props)=><GetDataPart {...props} EditMethod={this.EditMethod} />}/> 
     <Route exact path='/delete' render={(props)=><DeletePost {...props}/>}/>
     <Route exact path='/edit/:post_id' render={(props)=><EditPart {...props} realdata={this.state.realdata} handleUpdate={this.handleUpdate}/>}/>
    <Route exact path="/update" render={(props)=><Update {...props} title={this.state.updatetitle} body={this.state.updatebody}/>} />
    </div>
    </BrowserRouter>
  );
}
}


