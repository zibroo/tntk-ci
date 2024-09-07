import React from "react";
// ---- Style ---- //
import "./index.scss";

// ---- Components ---- //

const HorizontalCard = ({ book }) => {
  return (
    <div className="horizontal-card">
      <div className="horizontal-card__img">
        <img src={book.picture} alt="#" />
      </div>
      <div className="horizontal-card__content">
        <h3 className="horizontal-card__name">{book.name}</h3>
        <p className="horizontal-card__description">{book.description}</p>

        <div className="horizontal-card__price-block">
          <span className="horizontal-card__price">USD {book.price}</span>
          <span className="horizontal-card__old-price">
            USD {1 + (book.price * 1)}
          </span>
        </div>
        <button className="horizontal-card__add-to-cart">Buy</button>
      </div>
    </div>
  );
};

export default HorizontalCard;
