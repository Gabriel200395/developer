import React from 'react' 
import {GridRotating} from './Styles' 




export default function Rating(){
     
     return(
        <GridRotating>
            <section>
             <li>
                <h3>Figma</h3>
                <span className="bar">
                    <span className="figma"></span>
                </span>
             </li>
               

             <li>
                <h3>Html / Html 5</h3>
                <span className="bar">
                    <span className="html"></span>
                </span>
             </li> 

             <li>
                <h3>Css</h3>
                <span className="bar">
                    <span className="css"></span>
                </span>
             </li>
               

             <li>
                <h3>Java Script</h3>
                <span className="bar">
                    <span className="javascript"></span>
                </span>
             </li> 
           </section>

            <section>
             <li>
                <h3>React JS</h3>
                <span className="bar">
                    <span className="react"></span>
                </span>
             </li>
               

             <li>
                <h3>React Native</h3>
                <span className="bar">
                    <span className="reactn"></span>
                </span>
             </li> 

             <li>
                <h3>Node JS</h3>
                <span className="bar">
                    <span className="node"></span>
                </span>
             </li>
               

             <li>
                <h3>Php / Mysql</h3>
                <span className="bar">
                    <span className="phpm"></span>
                </span>
             </li> 
           </section>     
        </GridRotating>
     );


}