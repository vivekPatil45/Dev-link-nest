import React, { useState, useEffect } from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const Bookmark = ({ name }) => {
    const [isBookmarked, setIsBookmarked] = useState(false)

    // Load the bookmark state from localStorage when the component mounts
    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || []
        setIsBookmarked(savedBookmarks.includes(name))
    }, [name])

    const handleBookmark = (e) => {
        e.stopPropagation()
        setIsBookmarked((prev) => {
            const newState = !prev
            const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || []

            let updatedBookmarks
            if (newState) {
                // Add the name to the bookmarks array
                updatedBookmarks = [...savedBookmarks, name]
            } else {
                // Remove the name from the bookmarks array
                updatedBookmarks = savedBookmarks.filter((item) => item !== name)
            }

            // Update localStorage with the new bookmarks array
            localStorage.setItem('bookmarkedItems', JSON.stringify(updatedBookmarks))

            return newState
        })
    }

    return (
        <button
            className="rounded-md p-[4px]"
            onClick={handleBookmark}
            data-tooltip-id="save-btn"
        >
            {isBookmarked ? (
                <BsBookmarkFill color="#714EFF" size="1.2rem" />
            ) : (
                <BsBookmark size="1.2rem" />
            )}
        </button>
    )
}

export default Bookmark
