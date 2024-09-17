import React, { useContext } from 'react'
import SideNavbar from '../sidenavbar/SideNavbar'
import Header from './Header'
import Sidebar from '../Sidebar'
import MobileBottomNav from './MobileBottomNav'
import { Footer } from './Footer'
import { GlobalContext } from '../../contextAPI'

const GeneralLayout = ({children}) => {

    const { sidebar } = useContext(GlobalContext)
    return (
        <>
            <Header />
            <SideNavbar />
            <div
                className={`row-start-2 row-end-3 overflow-y-scroll h-full w-full bg-gray-100 dark:bg-[#101623] ${
                    sidebar ? 'max-[1024px]:overflow-hidden' : ''
                }`}
            >

                <nav>
                    <Sidebar />
                </nav>

                <main
                    data-custom="restrict-click-outside"
                    className="flex flex-col min-h-full px-4 pb-2 md:ml-[290px] lg:w-[calc(100%-290px)] bg-white dark:bg-inherit"
                    id="main"
                >
                    <div className="flex-grow mt-20">
                        {children}
                    </div>

                    <MobileBottomNav/>
                    <Footer/>
                </main>
            </div>
        </>
    )
}

export default GeneralLayout
