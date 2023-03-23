import './App.css';
import './styles.css';
import products from './DB.js';
import { useState } from 'react';
import Filters from './components/Filters';


function App() {
  const [searchBook, setSearchBook] = useState("");
  const [productsList, setProductsList] = useState(products);
  return (
    <div>
    <section className="products">
    <div className="filters-container">
        <form className="input-form">
          <input type="text" className="search-input" placeholder="search..." onChange={(e)=> {
            setSearchBook(e.target.value)}}/>
        </form>
        {/*Display Buttons*/}
        <h5>Genre</h5>
        <article>
          <Filters setProductsList={setProductsList} productsList={productsList}/>
        </article>
        </div>
        {/*Display Books*/}
        <div className="products-container">
        {productsList.filter((item) => {
          if (searchBook === ""){
            return item;
          }else if(item.title.toLowerCase().includes(searchBook.toLowerCase())){
            return item};
        })
        .map((item) => {
          return(
          <article className="product" key={item.id}>
          <img src={item.image} className="product-img img" alt=""/>
          <footer>
            <h5 className="product-name">{item.title}</h5>
            <span className="product-price">${item.price}</span>
          </footer>
          </article>)          
        })
      }
        </div>
      </section>
    </div>
    )
    }

export default App;
