import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { reservation } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../components/commons/SideBar";
import TopBar from "../../components/commons/TopBar";

export default function ReservationList() {
  const [data, setData] = useState(reservation);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "user",
      headerName: "User",
      width: 105,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", width: 115 },

    { field: "email", headerName: "Email", width: 150 },

    { field: "phone", headerName: "Phone", width: 125 },

    { field: "product", headerName: "Product", width: 125 },

    { field: "message", headerName: "Message", width: 380 },

    { field: "date", headerName: "Date", width: 105 },
  ];

  return (
    <div>
      <TopBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="userList">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
