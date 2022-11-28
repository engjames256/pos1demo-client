import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props;

  function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <main className="block col-2">
      {/* <h2>Products</h2> */}

      <div className="">
        <input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Search for names.." style={{width:"750px"}}></input>

        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} ></Product>
        ))}
      </div>
    </main>
  );
}
