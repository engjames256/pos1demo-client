import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import NewProduct from "../../components/products/NewProduct";
import "../../components/products/ProductList.css";
import TopBar from "../../components/commons/TopBar";
import SideBar from "../../components/commons/SideBar";

const DataTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pos1demo.cyclic.app/api/v1/products")
      .then((result) => result.json())
      .then((res) => setProducts(res.products));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "image",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.value} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "description", headerName: "Description", width: 270 },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "created by",
      headerName: "Created By",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "createdAt", headerName: "Date Added", width: 110 },
    { field: "updatedAt", headerName: "Date Updated", width: 110 },
    {
      field: "action",
      headerName: "Action",
      width: 135,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button
                style={{
                  backgroundColor: "#3bb077",
                  borderRadius: "5px",
                  width: "50px",
                  marginRight: "5px",
                  height: "25px",
                  fontWeight: "300",
                }}
              >
                EDIT
              </button>
            </Link>
            <button
              onClick={() => handleDelete(params.row.id)}
              style={{
                backgroundColor: "red",
                border: "1px solid red",
                width: "60px",
                borderRadius: "5px",
                height: "25px",
                fontWeight: "300",
              }}
            >
              DELETE
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <TopBar />

      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          style={{
            height: 500,
            width: "1130px",
            marginLeft: "10px",
          }}
        >
          <center>
            <h3 style={{ color: "darkblue" }}>Products</h3>
          </center>
          <NewProduct />
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
