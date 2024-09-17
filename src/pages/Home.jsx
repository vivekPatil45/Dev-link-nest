import React, { useState } from 'react'
import { Icons } from '../components/icons';
import Logo from '/logo.svg'
import { sidebarData } from '../database/data';
import { Link } from 'react-router-dom';
const Home = () => {
    const [welcome, setWelcome] = useState(true);
    const [resources, setResources] = useState(true)


    const handleWelcome = () => {
        setWelcome((prev) => !prev)
    }
    const handleResources = () => {
        setResources((prev) => !prev)
    }
    return (

        <section 
            data-custom="restrict-click-outside"
            className="flex flex-col max-h-[calc(100vh - 165px)]  max-w-[calc(100% - 165px)] flex-col sm:m-3 lg:m-8 "
        >
            <div>
                <div className='flex items-center justify-between'>
                    <h2 className="text-2xl dark:text-text-tertiary mb-0 mt-6 md:mt-0">Welcome!</h2>

                    <div className="hidden sm:flex" onClick={handleWelcome}>
                        {welcome ?(
                            <Icons.rxCaretDown size={50} className=' cursor-pointer' />
                        ) : (
                            <Icons.rxCaretRight size={50} className="cursor-pointer"/>
                        )}
                    </div>
                </div>
                {
                    welcome && (
                        <>
                            <p className=' text-md  text-text-quinary' >
                                Welcome aboard, we&apos;re excited to have you at LinksHub!
                            </p>
                            <div className=' min-h-52 p-8  rounded-3xl dark:bg-slate-800 bg-theme-primary-light mt-4 mb-6 border border-theme-secondary/25 shadow-md'>
                                <div className=' h-full flex flex-col lg:flex-row items-center justify-around'>
                                    <div className=' mr-0 lg:mr-8'>
                                        <div className='flex justify-center lg:justify-start' >
                                            <img src={Logo} alt="" />
                                        </div>
                                        <p className='my-2 pt-3 text-base text-text-quinary' >
                                            LinksHub aims to provide people access to a wide range of
                                            free resources and tools that they can use to learn and
                                            develop their tech skills. These resources include links
                                            to free software, libraries, frameworks, and other tools
                                            that can be used to build and deploy applications,
                                            website, and other projects.
                                        </p>
                                    </div>

                                    
                                </div>
                            </div>
                        </>
                    )
                    
                }
            </div>

            <div>
                <div className="flex items-center justify-between mt-4">
                    <div className="text-2xl dark:text-text-tertiary">
                        Resources
                    </div>
                    <div className="hidden sm:flex" onClick={handleResources}>
                        {resources ? (
                            <Icons.rxCaretDown size={50} className="cursor-pointer" />
                        ) : (
                            <Icons.rxCaretRight size={50} className="cursor-pointer" />
                        )}
                    </div>
                </div>

                <div>
                    {resources && (
                        <>
                            <span className="text-text-quinary">
                                We&apos;ve curated a wealth of resources just for you. Go
                                ahead and explore at your own pace.
                            </span>
                            <ul className="flex flex-wrap mt-4 gap-5">
                                {resources && sidebarData.map((el, i) => (
                                    <Link
                                        key={i}
                                        to={`/${el.category}`}
                                        className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(33.33%-1rem)] group"
                                    >
                                        <div className="border border-theme-secondary border-opacity-25 shadow-sm dark:border dark:border-theme-primary dark:border-opacity-20 duration-300 transition-all dark:bg-slate-800 dark:hover:bg-slate-700 bg-theme-primary-light hover:bg-theme-primary-light/8 flex items-center justify-between rounded-xl sm:h-16 h-fit">
                                            <div className="p-5 truncate ...">
                                                {el.category.toUpperCase()}
                                            </div>
                                            <div>
                                                    <Icons.arrowRightLong className="m-4 hidden group-hover:block" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Home
