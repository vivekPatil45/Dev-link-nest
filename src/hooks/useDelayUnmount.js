import { useEffect, useState } from 'react'

const useDelayUnmount = (isMounted, delay) => {
    const [showElement, setShowElement] = useState(false)

    useEffect(() => {
        let timeout = undefined

        if (isMounted && !showElement) {
        setShowElement(true)
        } else if (!isMounted && showElement) {
        timeout = setTimeout(() => {
            setShowElement(false)
        }, delay)
        }

        return () => clearTimeout(timeout)
    }, [isMounted, delay, showElement])

    return showElement
}

export default useDelayUnmount
