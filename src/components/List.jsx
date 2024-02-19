import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function List(props) {
    return (
        <ListGroup>
            {
                props.products && props.products.length>0 && props.products.map(product=> <ListGroup.Item key={product.id}>{product.title && product.title}</ListGroup.Item>)
            }
        
        </ListGroup>
    );
}

export default List;