import './products.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/product-slice';
import { useEffect } from 'react';
import Productcard from '../Productcard/Productcard';
function Products({result}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
      dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div className='product'>
      <div className='item'>
        {/* {products.map(product => (
          <div key={product.id}>
            <Productcard    product={product}  />
          </div>
        ))} */}
        {result}
      </div>
    </div>
  );
}

export default Products;