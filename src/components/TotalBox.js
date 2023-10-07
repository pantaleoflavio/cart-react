import React from "react";
import { useGlobalContext } from "../context/context";
import formatNumber from "../utils/formatNumber";

const TotalBox = () => {
  const { total } = useGlobalContext();
  return <section className="total-section section-center">
    <div className="card">
      <header className="card-header">
        <h4>Cart</h4>
      </header>
      <hr/>
      <div className="card-content">
        <h4>{formatNumber(total)}</h4>
      </div>
      <hr />
      <footer className="card-footer">
        <div className="btn btn-selector">checkout</div>
      </footer>
    </div>
  </section>;
};

export default TotalBox;
