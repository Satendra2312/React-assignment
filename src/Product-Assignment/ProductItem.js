const ProductItem = (props) => {
    return (

        <div className="item-main">
            <div className="item-brand">
                {props.product.brand}
            </div>
            <div className="item-content">
                <h3 className="item-name">{props.product.name}</h3>
                <p className="item-discription">{props.product.discription}</p>
                <button className="item-btn">Delete</button>
            </div>
            <div className="item-date">
                {props.product.date}
            </div>
        </div>
    )
}
export default ProductItem;