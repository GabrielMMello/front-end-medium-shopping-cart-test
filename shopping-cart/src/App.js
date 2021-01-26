import './App.css';
import axios from "axios";
import {useState, useEffect} from "react"
// Bootstrap script was loaded in the file index.html

function App() {
  const [cartData, setCartData] = useState({});

  // Fetch data from api

  const requestCartData = async () => {
    try {
      /* The api has two routes for this test: "/free-shipping" and "/no-free-shipping".
      Change the url in the following axios call to see the effect */

      const response = await axios.get("http://localhost:3333/free-shipping");
      setCartData(response.data);
    } 
    catch(err) {
      console.error(err);
    };
  }

  useEffect(() => {
    if (!cartData.hasOwnProperty("items")) requestCartData();
  })

  // Change the "value" from data so it becames a floating point with 2 digits after the ponit, then turn it in a string and replaces the dot with a comma
  const handleValue = (value) => {
    return (value / 100).toString().replace(".", ",")
  }

  // Maps trought the "items" array and returns an array with JSX representing the items on the shopping cart
  const itemsArray = () => {
    return cartData.items.map((item) => {
      return  <div key={item.uniqueId} className="item-box card-body">
                <img className="item-box__img" src={item.imageUrl} alt="item" />
                <br />
                <p className="item-box__name">{item.name}</p>
                <p className="item-box__old-price">R$ {handleValue(item.price)}</p>
                <p className="item-box__new-price">R$ {handleValue(item.sellingPrice)}</p>
              </div>;
    })
  };
  return (
    <div className="App">
      <div className="c-box card">
        <header className="header__box card-header">Meu carrinho</header>
        <div className="item-list-box">
          {cartData.hasOwnProperty("items") && itemsArray()}
        </div>
        <div className="totals-box card-footer bg-white">
          <p className="totals-box__text">Total</p>
          <p className="totals-box__price">$ {cartData.hasOwnProperty("value") && handleValue(cartData.value)}</p>
          {// Check if there is free shipping
            cartData.hasOwnProperty("value") && cartData.value >= 1000 && <div className="totals-box__free-shipping">Parabéns, sua compra tem frete grátis!</div>}
        </div>
        <div className="submit-box card-footer">
          <button className="submit-box__button btn btn-primary">Finalizar compra</button>
        </div>
      </div>
    </div>
  );
}

export default App;
