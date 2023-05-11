import React, {useState} from "react";
import NavTabs from './NavTabs.jsx';
import AboutMe from './pages/About-me.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import Footer from './Footer.jsx'
import '../styles/General-Layout.css'

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe'){
            return <AboutMe />
        }
        if (currentPage === 'Resume'){
            return <Resume />
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio />
        }
        else{
            return <Contact />
        }
    };

    const handlePageChange = (page) => setCurrentPage (page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />

        </div>
    )
}

