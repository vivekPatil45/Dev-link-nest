import React, { useState } from 'react'
import CardsListItem from './CardsListItem'
import { BackToTopButton } from './BackToTopButton'
import { PopupInfo } from './PopupInfo'

const CardsList = ({ cards }) => {
    const [currentCard, setCurrentCard] = useState(null)

    const getCardId = (item) => {
        setCurrentCard(item)
    }
    const removeCurrentCard = () => {
        setCurrentCard(null)
    }
    cards.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-stretch ">
                {cards.map((data) => (
                <CardsListItem
                    key={data.id}
                    data={data}
                    onClick={() => getCardId(data)}
                />
                ))}
            </ul>
            <BackToTopButton />
            <PopupInfo currentCard={currentCard} onClose={removeCurrentCard} />
        </>
    )
}

export default CardsList
