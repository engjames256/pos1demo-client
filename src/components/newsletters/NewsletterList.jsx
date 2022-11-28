import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import NewNewsletter from "../../components/newsletters/NewNewsletter";
import "../../components/products/ProductList.css";
import TopBar from "../../components/commons/TopBar";
import SideBar from "../../components/commons/SideBar";

const DataTable = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/newsletters")
      .then((result) => result.json())
      .then((res) => setNewsletters(res.newsletters));
  }, []);

  const handleDelete = (id) => {
    setNewsletters(newsletters.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "newsletter", headerName: "Newsletter", width: 570 },
    {
      // field: "product",
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
            height: "500",
            width: "1130px",
            marginLeft: "10px",
          }}
        >
          <center>
            <h3 style={{ color: "darkblue" }}>Newsletters</h3>
          </center>
          <NewNewsletter />
          <DataGrid
            rows={newsletters}
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
