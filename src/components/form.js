import React, {Component} from 'react';
import '../styles/form.css';
import nameVdo from '../videos/name.mp4';
import emailVdo from '../videos/email.mp4';
import welcome from '../videos/welcome.mp4';
import validEmail from '../videos/valid-email.mp4';
import image from '../videos/image.jpg';

class Form extends Component{
    state={
            name:"",
            email:"",
            description:"",
            video:[nameVdo,emailVdo,welcome,validEmail],
            focus:false,        
    }
    
    eventChangeHandler=(event)=>{
        
        this.setState({
            [event.target.name]:event.target.value
            
        })
    }
    focusHandler=()=>{
        this.setState({
            focus:true
        })
    }


    sumbitHandler=(event)=>{

        let NAME=this.state.name
        let EMAIL=this.state.email
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(NAME.length<=3||EMAIL.length<6||!EMAIL.match(mailformat)){
            
            return event.preventDefault();
            
        }
        
    }
    

 render(){

     let addVideo;
        addVideo=this.state.video[2]
        

     let sname=this.state.name
     let semail=this.state.email
     let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    
    if(sname.length===""||sname.length<=3){
            if(this.state.focus){
         addVideo=this.state.video[0]
         
            }
    
      
     }
     else if(semail.length===""||semail.length<6||!semail.match(mailformat)){
          
        addVideo=this.state.video[1]
            
       
}else{
    addVideo=this.state.video[3]
}

     
     return(
        <>
        <div className="forms">
           <form  id="form" onSubmit={this.sumbitHandler}>
           <label htmlFor="name">Enter Your Name</label>
           <input type="text"  
           name="name" 
           id="name" 
           className="form-control" 
           placeholder="Enter Your Name"
           value={this.state.name}
           onChange={this.eventChangeHandler} onBlur={this.focusHandler}>
           </input>
           <label htmlFor="email">Enter Your Email</label>
           <input type="text"  
           name="email" 
           id="email" 
           className="form-control" 
           placeholder="Enter Your Email"
           value={this.state.email}
           onChange={this.eventChangeHandler}>
           </input>
           <label htmlFor="description">Enter Description</label>
           <input type="text" 
           name="description" 
           id="description" 
           className="form-control" 
           placeholder="Enter Description"
           value={this.state.description}
           onChange={this.eventChangeHandler}></input>
           
           <button type="submit" id="button" >Send</button>
           </form>
        
       </div>
       <div className="vdo">
            <img src={image} alt=""></img>
         <video autoPlay 
         muted 
         playsInline 
         key={addVideo}>
        
        <source src={addVideo}/>
             
         </video>

     </div>
        
    </>
     )
 }
} 

export default Form;


