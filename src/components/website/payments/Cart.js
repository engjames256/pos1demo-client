import React, { useState } from "react";
import Modal from "react-modal";
import printJS from 'print-js';
import "./Cart.css";

let user = JSON.parse(localStorage.getItem("user"));

export default function Basket(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice;

  // const [sale, setSale] = useState("");

  async function sales() {
    let item = {
      username: user.user.name,
      image: user.user.image,
      email: user.user.email,
      phone: user.user.phone,
      products: JSON.stringify(cartItems),
      amount: totalPrice
    };

    let result = await fetch("https://pos1demo.cyclic.app/api/v1/sales", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
  }
  function salesHandler(e) { e.preventDefault() }

  function printReciept() {
    printJS({
      printable: 'reciept',
      type: 'html',
      documentTitle: "",
      ignoreElements: ['checkout'],
      targetStyles: ['*']
    })
  }


  return (
    <aside
      className="block col-1"
      style={{
        margin: "10px",
        backgroundColor: "#e9e9ed",
        padding: "10px",
        marginTop: "0px",
      }}
    >
      <div>
        {cartItems.length === 0 && (
          <div style={{ textAlign: "center", fontWeight: 600 }}>
            Cart is empty
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">{itemsPrice}</div>
            </div>
            {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right"> {taxPrice}</div>
            </div> */}
            {/* <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">{shippingPrice}</div>
            </div> */}

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong> {totalPrice}</strong>
              </div>
            </div>
            <hr />

            <div className="payment">
              <form id="reciept"
                onSubmit={salesHandler}

              >
                <button className="checkout" type="button"
                  onClick={event => {
                    sales();
                    printReciept();
                  }}
                >

                  Pay Now
                </button>

                <div id='printme' style={{ borderRadius: "10px", border: "1px solid black", width: "210px", marginTop: "10px", justifyContent: "center" }}>
                  <div className="businessName">Pos 1 Demo</div>
                  <div className="recieptDetails">
                    <div>
                      <div className="dateAndTime">
                        <div className="date"> {new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()}
                        </div>
                        {/* <div className="time">{new Date().getHours() + ":" + new Date().getMinutes()}</div> */}
                      </div>
                      <div className="branch">{user.user.address}</div>
                    </div>
                    <div className="reciept">
                      <div className="desc">Reciept No.</div>
                      <div className="recieptNo">{new Date().getFullYear().toString().slice(-2) + new Date().getMinutes() + (new Date().getMonth() + 1) + new Date().getHours() + new Date().getDate() + new Date().getSeconds()}</div>
                    </div>
                  </div>
                  <div className="itqHeading">
                    <div className="item">Item</div>s
                    <div className="qty">Qty</div>
                    <div className="cost">Cost</div>
                  </div>

                  {cartItems.map((item) => (
                    <div className="itqBody" key={item.id}>
                      <div className="itemBody">{item.name}</div>
                      <div className="qtyBody">{item.qty}</div>
                      <div className="costBody">{Math.imul(item.qty, item.price)}</div>
                    </div>
                  ))}

                  <div className="total">
                    <div className="totalCost">
                      <strong>TOTAL</strong>
                    </div>
                    <div className="totalAmount">
                      <strong> {totalPrice}</strong>
                    </div>
                  </div>
                  <div className="attendant">
                    <div> You were served by</div>
                    <div>{user.user.name}</div>
                  </div>
                  <div className="footer">COME AGAIN</div>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
