import React from "react";
import Grid from "@material-ui/core";
import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoe'},
    {id: 2, name: 'Macbook', description: 'Apple best product'},
    {id: 3, name: 'T-Shirt', description: 'Men best wear dress'},
    {id: 4, name: 'Dokhona', description: 'This is the single pice tribal wear dokhona'},
    {id: 5, name: 'Aronai', description: 'antic peace for boro people mufler'}
]

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product />
            </Grid>
        ))}

    </Grid>
  </main>;
};

export default Products;
