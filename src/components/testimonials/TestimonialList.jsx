import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import NewTestimonial from "../../components/testimonials/NewTestimonial";
import TopBar from "../../components/commons/TopBar";
import SideBar from "../../components/commons/SideBar";

const DataTable = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/testimonials")
      .then((result) => result.json())
      .then((res) => setTestimonials(res.testimonials));
  }, []);

  console.log(testimonials);

  // const handleDelete = (id) => {
  //   setTestimonials(testimonials.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: "testimonail", headerName: "Testimonial", width: 520 },
    {
      field: "Created by",
      headerName: "Created by",
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
    { field: "createdAt", headerName: "Date Added", width: 110 },
    { field: "updatedAt", headerName: "Date Updated", width: 110 },
    {
      field: "Action",
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
              // onClick={() => handleDelete(params.row.id)}
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
            height: 520,
            width: "1130px",
            marginLeft: "10px",
          }}
        >
          <center>
            <h3 style={{ color: "darkblue" }}>Testimonials</h3>
          </center>
          <NewTestimonial />
          <DataGrid
            // rows={testimonials}
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
