import React,{useEffect} from 'react' 
import {Navbar} from './Styles'
import {Link} from 'react-scroll'
import { ThemeProvider } from 'styled-components'
import{theme} from '../../Theme/theme'


export default function NavHome(props){

     useEffect(()=> {
       window.addEventListener("scroll" , function(){
        let header = document.querySelector("header"); 
        header.classList.toggle("sticky", window.scrollY > 250);
       })
     },[])
return(
     <ThemeProvider theme={theme}>    
     <Navbar>
          <header>
          <strong className="logo">Gabriel.</strong>
          {props.ListElements.map((list, index) => (
                <ul className="list" key={index}>
                    <li>{list.home}</li>
                    <Link to="about" smooth={true} duration={1000}><li>{list.about}</li></Link>
                    <Link to="project" smooth={true} duration={1000}><li>{list.project}</li></Link>
                    <Link to="custurmers" smooth={true} duration={1000}><li>{list.custurmers}</li></Link>
                    <Link to="blog" smooth={true} duration={1000}><li>{list.blog}</li></Link>
                    <Link to="contact" smooth={true} duration={1000}><li>{list.contact}</li></Link>
                </ul>
            ))}
     </header>
     </Navbar>
     </ThemeProvider>

);



} 