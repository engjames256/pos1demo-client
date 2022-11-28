import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { feedback } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../components/commons/SideBar";
import TopBar from "../commons/TopBar";
import Testimonials from "../../components/testimonials/TestimonialList";
import EmployeeList from "../../components/feedbacks/EmployeeList";
import FoodList from "../../components/feedbacks/FoodList";

export default function FeedbackList() {
  //   const [data, setData] = useState(feedback);

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

  //     { field: "feedback", headerName: "Feedback", width: 500 },

  //     { field: "date", headerName: "Date", width: 105 },
  //   ];

  return (
    <div>
      <TopBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div>
          <Testimonials />
          <div style={{ display: "flex" }}>
            <FoodList />
            <EmployeeList />
          </div>
        </div>
      </div>
    </div>
  );
}
