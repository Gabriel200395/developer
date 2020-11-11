import React , {Component} from 'react';
import Navbar from './Components/Navbar/Navbar' 
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Custurmers from './Components/Custurmers/Custurmers'





class App extends Component{
  
  render(){
     
    return (
      <div>
        <Navbar />       
        <About /> 
        <Projects /> 
        <Custurmers />
        <Blog /> 
        <Contact /> 
        <Footer />
      </div>
    );
  

  }
  
  }

export default App;
