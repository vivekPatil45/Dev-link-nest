import React, { useEffect, useState } from 'react'
import Logo from '/logo.svg'
import { Link } from 'react-router-dom'
import { Icons } from '../icons'
import clsx from 'clsx'
import { ThemeToggler } from './ThemeToggler'

const Header = () => {

    const [currentPath, setCurrentPath] = useState('')
    const iconClass ='text-zinc-600 group-hover:text-primary dark:text-zinc-400 dark:group-hover:text-slate-300 h-6 w-6'

    useEffect(() => {
        // Set the current path when the component mounts
        setCurrentPath(window.location.pathname)
    }, [])


    const socialIcons = [
        {
            icon: <Icons.Linkedin className={iconClass} />,
            title: 'LinkedIn',
            href: 'https://www.linkedin.com',
            ariaLabel: 'Follow us on LinkedIn',
        },
        {
            icon: <Icons.GitHub className={iconClass} />,
            title: 'GitHub',
            href: 'https://github.com/',
            ariaLabel: 'Explore on GitHub',
            showOnMobile: true,
        },
    ]

    const inActiveIconCls = 'stroke-gray-400'
    const activeIconCls = 'text-primary dark:text-white'
    const navLinks = [
        {
            inActiveIcon: <Icons.saveInactive className={inActiveIconCls} />,
            activeIcon: <Icons.saveActive className={activeIconCls} />,
            label: 'Saved',
            href: '/saved',
            isDisabled: true,
        }
    ]

    


    const renderLinks = () =>
        navLinks.map(({ inActiveIcon, activeIcon, label, href }, i) => {
            const isHomeActive = currentPath === '/'
            const isUrlMatched = currentPath.startsWith(href)

            const isActive = label === 'Home' ? isHomeActive : isUrlMatched
            return (
                <li key={i}>
                    <a
                    href={href}
                    className={`hover:bg-slate-100 hover:bg-opacity-50 dark:hover:bg-zinc-400 dark:hover:bg-opacity-10 flex items-center justify-start p-2 gap-2 text-base font-medium leading-5 rounded-xl ${
                        isActive ? 'text-primary dark:text-white' : 'text-gray-text'
                    }`}
                    >
                    <span className="flex items-center justify-center"  title={label}>
                        {isActive ? activeIcon : inActiveIcon}
                    </span>
                    <span>{label}</span>
                    </a>
                </li>
            )
        })

    return (
        <header className="fixed top-0 left-0 z-30  h-[76px] w-screen flex items-center justify-between px-6 bg-white dark:bg-slate-800 shadow-header dark:shadow-none">
            
            {/* logo */}
            <div className="flex gap-4 ">
                <a href="/" aria-label="Logo">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>

            <div className='flex gap-5'>

                <div className="flex items-center justify-center gap-6">

                    <nav className="w-full  md:block hidden">
                        <ul className='w-full flex gap-0.5 tall:gap-1'>
                            {renderLinks()}
                        </ul>
                    </nav>

                    <div className="flex items-center justify-center gap-[14px]">
                    {
                        socialIcons.map(({icon, title, href, ariaLabel, showOnMobile }, i) => (
                            <a
                                key={i}
                                href={href}
                                title={title}
                                aria-label={ariaLabel}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={clsx(
                                'group flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-white dark:hover:bg-opacity-20 transition-colors',
                                showOnMobile ? '' : 'hidden sm:flex'
                                )}
                            >
                                {icon}
                            </a>
                            ))
                        }
                    </div>

                </div>
                <ThemeToggler />

            </div>


        </header>
    )
}

export default Header
