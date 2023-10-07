import React from "react";
import products from "../products";
import CartItem from "../components/CartItem";
import { MdRemoveShoppingCart } from "react-icons/md"

const Cart = () => {

  return(
  <section className="section-center"
  style={{ marginTop: "2rem"}}
  >
    <div className="cart-info">
      <h6>Item</h6>
      <h6 className="prd-name">Name</h6>
      <h6>Quantity</h6>
      <h6>Price</h6>
      <button className="btn icon-btn">
        <MdRemoveShoppingCart className="icon minus-icon"/>
      </button>
    </div>
    <hr />
    <section className="cart-section">
      {
        products.map((el) => {
          return <CartItem key={el._id} {...el}/>
        })
      }
    </section>
  </section>
  );
};

export default Cart;
