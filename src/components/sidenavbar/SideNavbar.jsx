import React, { useContext } from 'react'
import { GlobalContext } from '../../contextAPI'
import useDelayUnmount from '../../hooks/useDelayUnmount'

const SideNavbar = () => {

    const { sidebar, closeNav } = useContext(GlobalContext)
    const showElement = useDelayUnmount(sidebar, 300)

    if (!showElement) {
        return null
    }

    return (
        <div>
        
        </div>
    )
}

export default SideNavbar
