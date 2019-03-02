import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class ProductItems extends Component {

    onDelete  = (id) =>{
        if(confirm('Do you want delete this product?')){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {

        var {product,index} = this.props;
        var statusName  = product.status? 'con hang' : 'het hang'
        var statusClass = product.status? 'warning' : 'default'
        return (
       
                <tr>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <span className={`label label-${statusClass}`}>{statusName}</span>
                    </td>
                    <td>
                        <button type="button" onClick = {() => this.onDelete(product.id)} className="btn btn-danger mr-10">xoa</button>
                        <Link to ={`/product/${product.id}/edit`} className="btn btn-success">sua</Link>
                    </td>
                </tr>
            

        );
    }
}
export default ProductItems;
