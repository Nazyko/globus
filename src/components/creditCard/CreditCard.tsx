import { useEffect } from "react";
import "./CreditCard.css"

export const CreditCard = () => {
  useEffect(() => {
    if (window.Card) {
      new window.Card({
        form: "#myform",
        container: "#con",
        formSelectors: {
          numberInput: 'input[name="number"]',
          expiryInput: 'input[name="expiry"]',
          cvcInput: 'input[name="cvc"]',
          nameInput: 'input[name="name"]',
        },
      });
    } else {
      console.error("Card.js не загружен!");
    }
  }, []);

  return (
    <div id="con" className="credit-card">
      <form id="myform" className="credit-card-form">
        <input placeholder="Card Number" type="text" name="number" className="credit-card-input"/>
        <input placeholder="Full Name" type="text" name="name" className="credit-card-input"/>
        <input placeholder="CVC" type="text" name="cvc" className="credit-card-input"/>
        <input placeholder="Expiry (MM/YY)" type="text" name="expiry" className="credit-card-input"/>
      </form>
    </div>
  );
};
