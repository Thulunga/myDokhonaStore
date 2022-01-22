import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

import useStyles from './styles';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoe', price: '$5'},
    {id: 2, name: 'Macbook', description: 'Apple best product', price: '$5'},
    {id: 3, name: 'T-Shirt', description: 'Men best wear dress', price: '$5'},
    {id: 4, name: 'Dokhona', description: 'This is the single pice tribal wear dokhona', price: '$5'},
    {id: 5, name: 'Aronai', description: 'antic peace for boro people mufler', price: '$5'},
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
          {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product}/>
              </Grid>
          ))}

      </Grid>
    </main>
  );
}

export default Products;
