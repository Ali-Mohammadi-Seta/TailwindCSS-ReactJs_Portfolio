import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";



function App (){

    return(
<div>
<Navbar/>
<Hero />
<About />
<Skills/>
<Work />
<Contact/>

</div>
)


}

export default App