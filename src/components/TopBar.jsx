import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Icons } from './icons';
import { regEx , isValidResource} from '../utils/util';
import { categoryDescriptions } from './CategoryDescriptions';
import CardTooltip from './CardTooltip';

const TopBar = () => {
    const location = useLocation()
    const theme = localStorage.getItem('theme')
    const category = location.pathname;
    
    const categoryNameLink = category?.split('/')[1];
    const categoryName = category?.split('/')[1]?.split('-').join(' ');
    const subcategoryName = category?.split('/')[2]?.split('-').join(' ');
    const searchQuery = new URLSearchParams(location.search).get('query') || '';
    let cleanedCategory = '';
    cleanedCategory = (subcategoryName || categoryName)
        .replaceAll(regEx, ' ')
        .replaceAll('search query ', '')
        .replaceAll('three d', '3D');

    const capitalizeEachWord = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    const description = categoryDescriptions[searchQuery || subcategoryName] || '';
    const isResourceSelected = isValidResource(searchQuery || subcategoryName);
    if (location.pathname.length === 1) return null;



    return (
        <div
            data-custom="restrict-click-outside"
            className='flex items-center justify-between md:justify-start text-md dark:text-gray-300 gap-x-2  md:px-10 py-8'
        >
            <Link
                className='gap-x-2 items-center border border-theme-secondary/25  bg-theme-primary-light/20 bg-opacity-20 dark:bg-theme-tertiary/50 dark:border dark:border-theme-primary/8 px-[10px] py-[6px] rounded-md cursor-pointer hidden md:flex'
                to={'/'}
            >
                <Icons.Home className="h-4 w-4 m-auto text-text-primary-light dark:text-text-quaternary "/>
                <h3>Home</h3>
            </Link>
            <Icons.rxSlash className='hidden md:inline-block'/>
            <Link
                to={`/${categoryNameLink}`}
                className="bg-theme-primary-light/20 border border-theme-secondary/25 dark:bg-theme-tertiary/50 dark:border dark:border-theme-primary/8 px-[10px] py-[6px] rounded-md cursor-pointer hidden md:inline-block"
            >
                <h3>{capitalizeEachWord(categoryName)}</h3>
            </Link>
            <Icons.rxSlash className='hidden md:inline-block'/>
            <Link to={`/${categoryNameLink}`} className="flex gap-x-2 items-center">
                <Icons.arrowBack className="md:hidden" />
            </Link>
            <div className="md:bg-theme-primary-light/20 border border-theme-secondary/25 dark:bg-theme-tertiary/50 dark:border dark:border-theme-primary/8 px-[10px] py-[6px] text-xl md:text-base rounded-md truncate ...">
                <h3>{capitalizeEachWord(cleanedCategory)}</h3>
            </div>
            <button>
                <Icons.infoCircle
                    data-tooltip-id="info-tooltip"
                    data-tooltip-place="bottom"
                    data-tooltip-content={description}
                    size={30}
                    className=" ml-2 border border-theme-secondary/25 text-sm cursor-pointer bg-[#EDEDED] bg-opacity-20 dark:bg-theme-tertiary/75 dark:border dark:border-theme-primary/8 p-2 rounded-md "
                />
            </button>
            <CardTooltip theme={theme} />
        </div>
    )
}

export default TopBar
