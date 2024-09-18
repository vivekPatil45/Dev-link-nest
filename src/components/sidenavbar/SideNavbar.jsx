import React, { useContext } from 'react'
import { GlobalContext } from '../../contextAPI'
import useDelayUnmount from '../../hooks/useDelayUnmount'
import { Backdrop } from '../Backdrop'
import { createPortal } from 'react-dom'
import SideNavbarBody from './SideNavbarBody'

const SideNavbar = () => {

    const { sidebar, closeNav } = useContext(GlobalContext)
    const showElement = useDelayUnmount(sidebar, 300)

    if (!showElement) {
        return null
    }
    const overlayRoot = document.getElementById('overlay-root')
    if (!overlayRoot) {
        return null
    }

    return (
        <>
            <Backdrop
                onClick={closeNav}
                className="lg:hidden transition duration-300 delay-200"
            />
            {createPortal(
                <div
                    className={`absolute top-0 left-0 z-[100] h-min w-screen transition-all lg:hidden
                    ${sidebar ? 'animate-slide-in' : 'animate-slide-out'}
                    `}
                >
                    <SideNavbarBody />
                </div>,
                overlayRoot
            )}
        </>
    )
}

export default SideNavbar
