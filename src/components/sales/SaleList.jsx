import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
// import NewProduct from "../../components/products/NewProduct";
import "../../components/products/ProductList.css";
import TopBar from "../../components/commons/TopBar";
import SideBar from "../../components/commons/SideBar";

const DataTable = () => {
  const [sales, setSales] = useState([]);

  const listItems = (data) => {
    const array = [];
    const result = JSON.parse(data);
    result.forEach((value) => {
      array.push(` ${value.qty} ${value.name}`);
    });

    const toString = JSON.stringify(array)
      .replaceAll('"', "")
      .replace("[", "")
      .replace("]", "");

    return toString;
  };

  useEffect(() => {
    fetch("https://pos1demo.cyclic.app/api/v1/sales")
      .then((result) => result.json())
      .then((res) => {
        const newArray = res.sales.map((element) => {
          return {
            ...element,
            products: listItems(element.products),
          };
        });
        setSales(newArray);
      });
  }, []);

  const columns = [
    {
      field: "Customer",
      headerName: "Sales Person",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "products", headerName: "Products", width: 510 },
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "createdAt", headerName: "Date Added", width: 115 },
    // { field: "updatedAt", headerName: "Date Updated", width: 110 },
    // {
    //   field: "action",
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
    <div>
      <TopBar />

      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          style={{
            height: 520,
            width: "1130px",
            marginLeft: "10px",
          }}
        >
          <center>
            <h3 style={{ color: "darkblue" }}>Sales</h3>
          </center>
          {/* <NewProduct /> */}
          <DataGrid
            rows={sales}
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
