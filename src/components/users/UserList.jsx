import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { user } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import NewUser from "../../components/users/NewUser";
import "../../components/users/UserList.css";
import SideBar from "../../components/commons/SideBar";
import TopBar from "../../components/commons/TopBar";

export default function UserList() {
  const [data, setData] = useState(user);

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

    { field: "gender", headerName: "Gender", width: 120 },

    { field: "role", headerName: "Role", width: 105 },

    { field: "nationalId", headerName: "National ID", width: 250 },

    {
      field: "action",
      headerName: "Action",
      width: 70,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
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
            </Link> */}
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
        <div className="userList">
          <center>
            <h3 style={{ color: "darkblue" }}>Users</h3>
          </center>
          <NewUser />
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
