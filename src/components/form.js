import React, {Component} from 'react';
import '../styles/form.css';
import vdo from '../videos/vdo.mov';

class Form extends Component{
    state={
            name:"",
            email:"",
            description:"",
            video:vdo,
            focus:false, 
            loadData:false     
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
    let sname=this.state.name
    let semail=this.state.email
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


     let addVideo;
 
        addVideo=this.state.video
         

    if(sname.length===""||sname.length<=3){
            if(this.state.focus){
                if (this.video !== null) {
                    this.video.currentTime = 5
                  
                    addVideo=this.state.video
                   
                    this.video.addEventListener("timeupdate", function(){
                        if(this.currentTime >= 10) {
                        //    this.style.display="none"
                            this.pause()
                           
                        }
                    });
                    
                }
         
         
            }
    
      
     }
     else if(semail.length===""||semail.length<6||!semail.match(mailformat)){
        if (this.video !== null) {
            this.video.currentTime = 10;
           
            addVideo=this.state.video
            
            this.video.addEventListener("timeupdate",function() {
                if(this.currentTime>=15){
                    this.pause();
                    //disable
                }
            })
        }
       
            
       
}else if (this.video !== null) {
        this.video.currentTime = 15;
      
        addVideo=this.state.video
        this.video.addEventListener("timeupdate",function() {
            if(this.currentTime>=15){
                this.pause();
                //disable
            }
        })
       
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
           <button>SEND</button>
          
           </form>
        
       </div>
      
       <div className="vdo">
        <video autoPlay 
        muted ref={function(ref) { this.video = ref }.bind(this)}
        playsInline controls
        key={addVideo}>

        <source src={addVideo}/>

        </video>

        </div>
        
    </>
     )
 }
} 

export default Form;

