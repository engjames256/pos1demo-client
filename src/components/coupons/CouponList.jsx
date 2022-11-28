import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, StarRate } from "@material-ui/icons";
import { coupon } from "../../dummyData";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NewCoupon from "../../components/coupons/NewCoupon";
import "../../components/coupons/CouponList.css";
import SideBar from "../../components/commons/SideBar";
import TopBar from "../../components/commons/TopBar";

export default function CouponList() {
  const [data, setData] = useState(coupon);

  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/coupons").then((result) => {
      result
        .json()
        .then((res) => {
          setCoupons(res.coupons);
        })
        .catch((err) => console.log(err));
    });
  }, []);
  console.log(coupons);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/coupon/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <TopBar />
      <dvi style={{ display: "flex" }}>
        <SideBar />
        <div className="userList">
          {/* <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      /> */}
          <center>
            <h3 style={{ color: "darkblue" }}>Coupons</h3>
          </center>
          <NewCoupon />

          {coupons.map((coupon) => (
            <div className="yes">
              <div className="coupon">
                <div className="couponLeft">
                  <div className="top">
                    <div className="funfairarea">
                      <div className="funfairtop">FUN FAIR</div>
                      <div className="funfairstars">
                        <div>
                          <StarRate />
                        </div>
                        <div>
                          <StarRate />
                        </div>
                        <div>
                          <StarRate />
                        </div>
                        <div>
                          <StarRate />
                        </div>
                        <div>
                          <StarRate />
                        </div>
                      </div>
                    </div>
                    <div className="details">
                      <div className="venue">TIME OUT</div>
                      <div className="description">LEISURE PARK</div>
                      <div className="valuecoupon">VALUE COUPON</div>
                      <div className="value">({coupon.value})</div>
                      <div className="valuecoupon">NON REFUNDABLE</div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="number">No. {coupon.number}</div>
                    <div className="funfairbottom">FUN FAIR</div>
                    <div className="vip">{coupon.type}</div>
                  </div>
                </div>
                <div className="couponRight">COUPON</div>
                <div className="couponRightOne"></div>
                <div className="couponRightTwo"></div>
              </div>
            </div>
          ))}
        </div>
      </dvi>
    </div>
  );
}
