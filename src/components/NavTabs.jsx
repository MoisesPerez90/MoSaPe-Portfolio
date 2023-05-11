import React from 'react';

function NavTabs ({currentPage, handlePageChange}){
    return (
        <header>
            <h1>
                Moises Perez Portfolio
            </h1>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a
                        href="#about-me"
                        onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                        >
                        About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                        Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                        Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                        Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavTabs;
