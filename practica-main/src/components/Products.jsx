import React from 'react';
import List from './List';

function Products() {
    const [products, setProducts]=React.useState([])
    //const [contador, setContador]=React.useState(0)
    //const [palabra, setPalabra]=React.useState("")
    
    React.useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
            });
    }, [])
    
    
    return (
        <List products={products}/>
    );
}

export default Products;
