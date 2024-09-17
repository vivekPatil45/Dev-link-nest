import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for internal links

export const Footer = () => {
    return (
        <footer className="z-10 h-[58px]  flex w-full items-baseline justify-center rounded-lg text-center px-2 ">
            <div className="text-sm leading-7 md:tracking-wide text-center text-black dark:text-theme-secondary-light">
                <div>&copy; {new Date().getFullYear()} DevLinkNest</div>
                <div className="lg:flex">
                    <div className="mr-1 md:-mt-2 lg:mt-0">Developed by</div>
                    <div className="md:-mt-2 lg:mt-0"></div>
                    <a
                        href="https://github.com/vivekPatil45"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile of Vivek Patil"
                        className="underline mr-1 duration-300 transition-all hover:text-theme-secondary"
                    >
                        Vivek Patil
                    </a>
                </div>
            </div>
        </footer>
    );
};
