import './itemlistcontainer'
const ItemListContainer = ({greeting}) => {
    return (
        <div className='itemlist'>
            <h1>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer