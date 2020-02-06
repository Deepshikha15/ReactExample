import React from 'react';
import './page.css';
const Page = (props) =>{
    return(
        <div class="person">
            {/* <p>hello {Math.floor(Math.random(3)*2)}</p> */}
            <p onClick={props.click}>my name is {props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
        
    )

}

export default Page;