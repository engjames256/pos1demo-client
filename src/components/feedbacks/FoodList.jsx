import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
// import NewTestimonial from "../testimonials/NewTestimonial";
import "../../components/products/ProductList.css";
import TopBar from "../commons/TopBar";
import SideBar from "../commons/SideBar";

const DataTable = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/products")
  //     .then((result) => result.json())
  //     .then((res) => setProducts(res.products));
  // }, []);

  // const handleDelete = (id) => {
  //   setProducts(products.filter((item) => item.id !== id));
  // };

  const columns = [
    {
      field: "Customer",
      headerName: "Customer",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "feedback", headerName: "Feedback", width: 200 },
    { field: "createdAt", headerName: "Date Added", width: 110 },
    // { field: "updatedAt", headerName: "Date Updated", width: 110 },
    // {
    //   field: "Action",
    //   headerName: "Action",
    //   width: 135,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/product/" + params.row.id}>
    //           <button
    //             style={{
    //               backgroundColor: "#3bb077",
    //               borderRadius: "5px",
    //               width: "50px",
    //               marginRight: "5px",
    //               height: "25px",
    //               fontWeight: "300",
    //             }}
    //           >
    //             EDIT
    //           </button>
    //         </Link>
    //         <button
    //           // onClick={() => handleDelete(params.row.id)}
    //           style={{
    //             backgroundColor: "red",
    //             border: "1px solid red",
    //             width: "60px",
    //             borderRadius: "5px",
    //             height: "25px",
    //             fontWeight: "300",
    //           }}
    //         >
    //           DELETE
    //         </button>
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div
      style={{
        height: "240px",
        marginTop: "75px",
        width: "565px",
        marginLeft: "10px",
      }}
    >
      <center>
        <h3 style={{ color: "darkblue" }}>Snacks and Drinks</h3>
      </center>
      {/* <NewTestimonial /> */}
      <DataGrid
        // rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
