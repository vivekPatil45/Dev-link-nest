import { useEffect } from "react"

const useOnClickOutside = (ref,handler ) => {
    useEffect(()=>{
        const handleClickOutside = (e ) => {

            if (e.target && (e.target ).closest('[data-custom=restrict-click-outside]') !== null) {
                return;
            }

            else if(ref.current && !ref.current.contains(e.target)){
                handler()
            }


        }
        document.addEventListener('click' , handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref, handler])
}

export default useOnClickOutside;