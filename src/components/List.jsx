import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Boton from './Boton';

function List(props) {
    return (
        <ListGroup>
            {
                props.products && props.products.length>0 && props.products.map(product => 
                    (<ListGroup.Item key={product.id}>
                        <Boton product={product} />
                    </ListGroup.Item>)
                )
            }
        
        </ListGroup>
    );
}

export default List;