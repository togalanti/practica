import Button from 'react-bootstrap/Button';

function Boton({product}) {

    const obtenerProduct = (id) => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        });
    }

    return (
        <Button variant="primary" onClick={() => obtenerProduct(product.id)}>Product: {product.title}</Button>
    )
}

export default Boton;