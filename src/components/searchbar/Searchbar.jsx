import React, { useRef } from 'react'
import { Icons } from '../icons';

const Searchbar = ({
    dispatchSearch,
    searchQuery,
    showSuggestions,
    searchQueryIsValid,
    inputRef,
}) => {
    const formRef = useRef(null);
    return (
        <form
            data-custom="restrict-click-outside"
            noValidate
            role="search"
            ref={formRef}
        >   
            <div className=' relative'>
                <div className="relative w-full h-12 flex items-center justify-between  border border-theme-secondary/25 dark:border-none rounded-lg">
                    <label htmlFor="simple-search" className="sr-only">
                        Quick search
                    </label>

                    <input
                        ref={inputRef}
                        type="text"
                        id="simple-search"
                        name="simple-search"
                        className="peer h-12 w-full flex items-center justify-start pl-[46px] pr-4 py-3 bg-slate-100 bg-opacity-50 dark:bg-zinc-400 dark:bg-opacity-20 rounded-[10px] outline-none hover:shadow-input-hover focus:shadow-input-focus dark:hover:shadow-input-hover-dark dark:focus:shadow-input-focus-dark"
                        placeholder="Quick search..."
                        
                        autoComplete="off"
                        required
                    />

                    <Icons.search className="h-5 w-5 absolute top-[14px] left-4 text-gray-400 peer-focus:text-primary dark:peer-focus:text-slate-100" />
                </div>
            </div>
        </form>
    )
}

export default Searchbar
