import React from 'react'

const Footer = () => {
    return (
        <footer className="text-white body-font">
            <div className="bg-gray-200">
                <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-600 text-sm font-bold text-center sm:text-left">© 2021 Copyright:
                        <a href="https://www.tailwind-elements.com/" className="text-gray-600 ml-1" target="_blank">TOYS Ltda.</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a href="" className="buttonIcons">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="buttonIcons">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="buttonIcons">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="" className="buttonIcons">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="" className="buttonIcons">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </span>
                </div>
            </div>
    </footer>

    )
}

export default Footer;
