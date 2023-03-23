import React from 'react'
import products from '../DB';

const Filters = ({setProductsList, productsList}) => {

    const handleClick =(e)=>{
      console.log(e.target.textContent);
        const el = e.target;
          if (el.textContent === "all") {
            return setProductsList(products); 
          } else {
            const filteredProducts =  products.filter((product) => {
              return product.genre === el.textContent},            
            );
            setProductsList(filteredProducts)
        }
      }

    const buttons = [
        "all",
        ...new Set(products.map((product) => product.genre))];
        console.log(buttons);

  return (
    <div>
    {buttons.map((button) => {
          return (<button className='genre-btn' key={button.id} onClick={(e) => handleClick(e)}>{button}</button>
    )})}
    </div>
  )}
    

export default Filters
