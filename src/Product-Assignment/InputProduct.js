import { useState } from "react";

const InputProduct = (props) => {
    const defaultProduct = {
        brand: "",
        name: "",
        date: "",
        discription: ""
    }

    const [Product, setProduct] = useState(defaultProduct)

    const onClickHandler = (event) => {
        event.preventDefault();

        props.newProductAdd(Product);
        setProduct(defaultProduct)

    }

    /*  const HandleOnBrandChange = (event) => Product.brand = event.target.value
     const HandleOnDateChange = (event) => Product.date = event.target.value
     const HandleOnNameChange = (event) => Product.name = event.target.value
     const HandleOnDiscriptionChange = (event) => Product.discription = event.target.value */
    const handleInputChange = (event, field) => setProduct({ ...Product, [field]: event.target.value })


    return (
        <div className="Input-product">
            <form onSubmit={onClickHandler} className="Input-form">
                <div className="form-main">
                    <div className="label-flex Name">
                        <label>Product Name</label>
                        <input type='text' onChange={(e) => handleInputChange(e, 'name')} value={Product.name}></input>
                    </div>
                    <div className="label-flex brand">
                        <label>Select Brand</label>
                        <select className="brand-drop" onChange={(e) => handleInputChange(e, 'brand')} value={Product.brand}>
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="label-flex date">
                        <label>Date</label>
                        <input type='Date' onChange={(e) => handleInputChange(e, 'date')} value={Product.date}></input>
                    </div>
                </div >
                <div className="form-group text-dis">
                    <label>Discription</label>
                    <textarea rows="4" cols="50" onChange={(e) => handleInputChange(e, 'discription')} value={Product.discription}></textarea>
                </div>
                <button type="submit" className="btn">Add Product</button>
            </form >
        </div >
    )
}
export default InputProduct;