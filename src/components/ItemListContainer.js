function ItemListContainer(greetings){
    console.log(greetings);
    return(
        <div className="container">
            <h2>{greetings.title}</h2>
        </div>

    );
}
export default ItemListContainer;