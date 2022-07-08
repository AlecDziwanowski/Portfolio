import React from 'react';
// import all components
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        // use all components
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Footer />
        </>
    )
}

export default App;