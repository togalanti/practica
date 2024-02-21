import React from 'react';
import Button from 'react-bootstrap/Button';
import { ContadorContext } from './ContadorContext';

function Boton({product}) {
    const [detalle, setDetalle] = React.useState(null)

    const { setContador} = React.useContext(ContadorContext);

    const obtenerProduct = (id) => {
        setContador((contador) => contador + 1);

        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => {
            setDetalle(res);
        });
    }
    const handleSacar = () =>{
        setDetalle(null)
        setContador((contador) => contador - 1)
    }

    
    return (
        <div>
        <Button variant="primary" onClick={() => obtenerProduct(product.id)}>Product: {product.title}</Button>
            {detalle && (
                <div>
                    <img src={detalle.thumbnail} alt={detalle.title} />
                    <h2>{detalle.title}</h2>
                    <p>{detalle.description}</p>
                    <p>Precio: ${detalle.price}</p>
                    <Button variant="primary" onClick={() => handleSacar()}>Sacar</Button>
                </div> 
            )}
        </div>    
    )
}

export default Boton;