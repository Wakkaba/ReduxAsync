import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {id: 'p1', price: 6, title: 'Title book',description: 'Description book'},
  {id: 'p2', price: 3, title: 'Title book 2',description: 'Description book 2'},
  {id: 'p3', price: 8, title: 'Title book 3',description: 'Description book 3'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
