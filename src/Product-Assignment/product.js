import InputProduct from './InputProduct';
import ProductItem from './ProductItem';
import './product.css';
import { useState } from "react";

/* onst products = [
    { date: "03/08/2023", name: "cm2", brand: "bajaj", discription: "hello everyone!" },
    { date: "03/09/2023", name: "Movies", brand: "bajaj", discription: "hello everyone!" },
]

const newProductAdd = (Product) => {
    products.push(Product)
    console.log(products);
} */

const Product = () => {
    //use usestate
    const [ProductData, setaddItem] = useState([])
    const newProductAdd = (Product) => { setaddItem([...ProductData, Product]) }


    return (
        <>
            <InputProduct newProductAdd={newProductAdd}></InputProduct>
            <h1 className='head'>All Product</h1>
            <div className='Product'>{
                ProductData.map((product, index) => {
                    return (<ProductItem key={index} product={product}></ProductItem>)
                })

            }
            </div>
        </>
    )
}
export default Product;