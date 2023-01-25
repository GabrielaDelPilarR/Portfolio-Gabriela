import React from 'react';
import Head from './components/head';
import About from './components/about';
import FeaturedProjects from './components/featuredProjects';
import AllProjects from './components/allProjects';

function App() {
  return (
    <div className="App">
        <Head></Head>
        <About></About>
        <FeaturedProjects></FeaturedProjects>
        <AllProjects></AllProjects>

      
    </div>
  );
}

export default App;
