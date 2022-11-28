import React, { useState, useEffect } from "react";
import "./Products.css";

export default function Product(props) {

  const { product, onAdd } = props;

  const [data, setData] = useState(product);

  const [products, setproducts] = useState([]);

  return (
    <div>      
      <div>
        <table id="myTable" style={{width:"750px"}}>
          <tr >
            <td style={{ width: 1200, borderBottom: "1px solid darkblue" }}>{product.name}</td>
            <td style={{ width: 50, borderBottom: "1px solid darkblue", paddingLeft:"5px", paddingRight:"5px", backgroundColor: "#cd9933", borderRadius:"10px"}}>{product.price}</td>
            <td><button style={{ width: 100, borderRadius: "10px", backgroundColor:"grey" }} onClick={() => onAdd(product)} >
              ADD TO CART
            </button></td>
          </tr>
        </table>
      </div>

    </div >
  );
}
