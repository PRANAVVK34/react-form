import React, {Component} from 'react';
import Formpage from './formpage';
import VideoName from './videoName';
import VideoEmail from './videoEmail';
import VideoOther from './videoOther';
class Form extends Component{
    state={
            name:"",
            email:"",
            description:"",
            focs:false,
                
            
    }

    changeNameHandler=(e)=>{
        var name=e.target.value
        this.setState({name:name})
    }
    changeMailHandler=(e)=>{
        var email=e.target.value
        this.setState({email:email})
    }
    changeDescriptionHandler=(e)=>{
        var des=e.target.value
        this.setState({description:des})
    }

    focoutHandler=()=>{
        this.setState({focs:true})
    }


    sumbitHandler=(e)=>{

        let NAME=this.state.name
        let EMAIL=this.state.email
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(NAME.length<=3||EMAIL.length<6||!EMAIL.match(mailformat)){
            
            return e.preventDefault();
            
        }
        
    }

 render(){
    let addvideo=<VideoOther/>
    let sname=this.state.name
    let semail=this.state.email
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(sname===""||sname.length<=3){
        if(this.state.focs){ 
          addvideo=<VideoName/>
          
        }
  
    }
    
    else if(semail===""||semail.length<6||!semail.match(mailformat)){
        
            addvideo=<VideoEmail/>
          
    }else {
        addvideo=<VideoOther />
    }
     return(
        <>
        <Formpage 
        nameChange={this.changeNameHandler}
        emailChange={this.changeMailHandler}
        desChange={this.changeDescriptionHandler}
        submitted={this.sumbitHandler}
        name={this.state.name}
        email={this.state.email}
        des={this.state.description}
        foc={this.focoutHandler}/>
        {addvideo}
        
        </>
     )
 }
} 

export default Form;
