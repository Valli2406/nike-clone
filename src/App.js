import { useSelector } from 'react-redux';
import Pages from './components/Pages/Pages';
import { useState } from 'react';
import { fetchProducts } from './store/product-slice';
import Productcard from './components/Productcard/Productcard';
import Products from './components/Products/products';
function App() {
 
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn);
  // const cartItems = useSelector((state) => state.cart.itemsList);
  // console.log(cartItems);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [query, setquery] = useState("");
  //input Filter


  const handleInputChange = event => {
    setquery(event.target.value);
  
  };
  const products = useSelector((state) => state.products.products);
  
  //Radio Filter
  const handleChange = (event) => {
    const value = event.target.value;
    setselectedCategory(value === "All" ? null : value);
  }


  function filteredData(products, selected, query) {
    let filteredProducts = products;
    //Filtering input items 
    if (selected) {
      if (selected.includes('-')) {
        const [min, max] = selected.split('-').map(Number);
        filteredProducts = filteredProducts.filter(({ listPrice }) =>
          listPrice >= min && listPrice < max
        );
      } else if (selected.includes('+')) {
        const min = Number(selected.split('+')[0]);
        filteredProducts = filteredProducts.filter(({ listPrice }) =>
          listPrice >= min
        );
      } else {
        filteredProducts = filteredProducts.filter(({ category, productName, division, subCategory }) =>
          category === selected ||
          productName === selected ||
          division === selected ||
          subCategory === selected 
        );
      }
    }
    if (query) {
      filteredProducts = filteredProducts.filter(({ productName }) =>
          productName.toLowerCase().includes(query.toLowerCase())
      );
  }


    return filteredProducts.map((productItem) => {
      if (!productItem) {
        console.error("Product item is undefined:", productItem);
        return null;
      }

      return (
        <Productcard key={productItem.articleNo} productItem={productItem} />
      );
    });
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Pages handleChange = {handleChange} query ={query} handleInputChange ={handleInputChange} result={result}/>
    </>
  );
}

export default App;
