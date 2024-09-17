import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { sidebarData } from '../database/data';
import { categoryDescriptions } from '../components/CategoryDescriptions';
import BreadCrumbs from '../components/BreadCrumbs';
import { Icons } from '../components/icons';

const Category = () => {

    let {category} = useParams();
    const subcategories = category ? sidebarData.filter((c)=>c.category == category)[0]['subcategory']:[];
    const getDesc = (subcatName) => {
        for (const desc in categoryDescriptions) {
            if (desc == subcatName) {
                return categoryDescriptions[desc]
            }
        }
    
        return 'No description'
    }
    
    
    return (
        <section
            className='mt-8 flex min-h-[calc(100vh-165px)] flex-col'
            data-custom="restrict-click-outside"
        >
            <div className="sm:ml-4 2xl:mx-auto items-start gap-2">
                {
                    subcategories?.length ?(
                        <>
                            <div className='flex mt-8 justify-between'>
                                <BreadCrumbs
                                    sections={[{ name: category, url: `/${category}` }]}
                                />
                                <a
                                    className="flex my-auto gap-x-3"
                                    href="https://github.com/vivekPatil45"
                                    target="_blank"
                                >
                                    <Icons.messageIcon className="w-5 h-5 m-auto" />
                                    <span className="text-md text-text-quinary hidden md:block">
                                        Give a feedback
                                    </span>
                                </a>
                            </div>

                            <div className="flex max-w-1038 justify-center">
                                <div className="flex flex-wrap gap-x-5 gap-y-5 mt-6 mb-28 flex-start items-start">
                                {subcategories.map((subcat, i) => (
                                        <Link
                                            key={i}
                                            to={`/${category}${subcat.url}`}
                                            aria-label={`Explore ${subcat.name}`}
                                            className="group flex flex-col dark:border dark:border-theme-primary dark:border-opacity-8 rounded-xl dark:bg-theme-tertiary bg-theme-primary-light border border-theme-secondary/25 dark:bg-opacity-25 dark:hover:bg-theme-quaternary dark:hover:bg-opacity-25 dark:hover:border-opacity-25 hover:text-dark-primary dark:shadow-lg shadow-tile md:max-w-[320px] px-4 py-4 group max-w-none w-full"
                                        >
                                            <div className="flex justify-between">
                                            <div className="dark:text-gray-300 text-text-primary-light text-lg capitalize font-medium">
                                                {subcat.name}
                                            </div>
                                            <Icons.arrow className="opacity-0 group-hover:opacity-100 duration-300 w-6 h-6 text-theme-secondary dark:text-white" />
                                            </div>
                                            <div className="dark:text-text-tertiary text-text-quinary text-md h-12 pb-4">
                                            <div className="text-ellipsis ... line-clamp-2 w-full">
                                                {getDesc(subcat.url.slice(1))}
                                            </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <p className="text-theme-secondary dark:text-gray-text w-fit mx-auto text-center">
                                <span className="md:text-7xl text-xl uppercase font-bold">
                                    404|
                                </span>{' '}
                                No resources found.
                            </p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Category
