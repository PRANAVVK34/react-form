import React from 'react';
import './formpage.css';

function form(props) {
   return(
       <div className="forms">
           <form  id="form" onSubmit={props.submitted}>
           <label htmlFor="name">Enter Your Name</label>
           <input type="text"  
           name="name" 
           id="name" 
           className="form-control" 
           placeholder="Enter Your Name"
           value={props.name}
           onChange={props.nameChange} onBlur={props.foc}>
           </input>
           <label htmlFor="email">Enter Your Email</label>
           <input type="text"  
           name="email" 
           id="email" 
           className="form-control" 
           placeholder="Enter Your Email"
           value={props.email}
           onChange={props.emailChange}>
           </input>
           <label htmlFor="description">Enter Description</label>
           <input type="text" 
           name="description" 
           id="description" 
           className="form-control" 
           placeholder="Enter Description"
           value={props.des}
           onChange={props.desChange}></input>
           
           <button type="submit" id="button" >Send</button>
           </form>

       </div>
   )
}

export default form;
