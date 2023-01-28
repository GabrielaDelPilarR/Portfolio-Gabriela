import React from 'react';
import Head from './components/head';
import About from './components/about';
import FeaturedProjects from './components/featuredProjects';
import AllProjects from './components/allProjects';
import Technologies from './components/technologies';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
        <Head></Head>
        <About></About>
        <FeaturedProjects></FeaturedProjects>
        <AllProjects></AllProjects>
        <Technologies></Technologies>
        <Contact></Contact>

      
    </div>
  );
}

export default App;
