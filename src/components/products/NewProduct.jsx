import React, { useState } from "react";
import "../../components/products/NewProduct.css";

let user = JSON.parse(localStorage.getItem("user"));

export default function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function product() {
    let item = {
      name,
      image,
      description,
      price,
      username: user.user.name,
      image: user.user.image,
    };
    try {
      let result = await fetch("https://pos1demo.cyclic.app/api/v1/products", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
    } catch (error) {
      console.log(error);
    }
  }

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const selectedFile = async (e) => {
    const result = await convertImageToBase64(e.target.files[0]);

    setImage(result);
  };

  function productHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="newProduct">
      <form className="addProductForm" onSubmit={productHandler}>
        <div className="addProductItem">
          <input
            id="name"
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <input
            id="description"
            type="text"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <input
            id="price"
            type="text"
            placeholder="Ugx. 20,000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <input type="file" onChange={(e) => selectedFile(e)} />
        </div>

        <button className="addProductButton" onClick={product}>
          Add Product
        </button>
      </form>
    </div>
  );
}
