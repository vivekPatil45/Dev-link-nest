import Card from './Card'
const CardsListItem = (props) => {
    const { data, onClick } = props

    return (
        <li
            className="w-full transition-all duration-100 ease-in hover:scale-[1.02] cursor-pointer"
        >
            <Card data={data} onClick={onClick} />
        </li>
    )
}

export default CardsListItem
