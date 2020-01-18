import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Testing" />

                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(p => {
                                        return <Product key={p.id} product={p} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </Fragment>
            // <Product />
        );
    }
}
