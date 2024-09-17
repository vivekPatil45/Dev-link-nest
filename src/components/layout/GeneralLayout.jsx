import React from 'react'
import SideNavbar from '../sidenavbar/SideNavbar'
import Header from './Header'
import Sidebar from '../Sidebar'
import MobileBottomNav from './MobileBottomNav'

const GeneralLayout = ({children}) => {
    return (
        <>
            <Header />
            <SideNavbar />
            <div>

                <nav>
                    <Sidebar />
                </nav>

                <main>
                    <div>
                        {children}
                    </div>

                    <MobileBottomNav/>
                </main>
            </div>
        </>
    )
}

export default GeneralLayout
