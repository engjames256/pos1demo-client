// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { message } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import SideBar from "../../components/commons/SideBar";
// import TopBar from "../../components/commons/TopBar";

// export default function MessageList() {
//   const [data, setData] = useState(message);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const columns = [
//     {
//       field: "user",
//       headerName: "User",
//       width: 105,
//       renderCell: (params) => {
//         return (
//           <div className="userListUser">
//             <img className="userListImg" src={params.row.avatar} alt="" />
//             {params.row.username}
//           </div>
//         );
//       },
//     },

//     { field: "name", headerName: "Name", width: 115 },

//     { field: "email", headerName: "Email", width: 150 },

//     { field: "phone", headerName: "Phone", width: 125 },

//     { field: "message", headerName: "Message", width: 505 },

//     { field: "date", headerName: "Date", width: 105 },
//   ];

//   return (
//     <div>
//       <TopBar />
//       <div style={{ display: "flex" }}>
//         <SideBar />
//         <div className="userList">
//           <center>
//             <h3 style={{ color: "darkblue" }}>Messages</h3>
//           </center>
//           <DataGrid
//             rows={data}
//             disableSelectionOnClick
//             columns={columns}
//             pageSize={8}
//             checkboxSelection
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import NewTestimonial from "../../components/testimonials/NewTestimonial";
import "../../components/products/ProductList.css";
import TopBar from "../../components/commons/TopBar";
import SideBar from "../../components/commons/SideBar";

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
    { field: "phone", headerName: "Phone", width: 110 },
    { field: "email", headerName: "Email", width: 110 },
    { field: "message", headerName: "Message", width: 550 },
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
    <div>
      <TopBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div>
          <div
            style={{
              height: "550px",
              width: "1140px",
              marginLeft: "10px",
              marginBottom: "5px",
            }}
          >
            <center>
              <h3 style={{ color: "darkblue" }}>Messages</h3>
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
        </div>
      </div>
    </div>
  );
};

export default DataTable;
