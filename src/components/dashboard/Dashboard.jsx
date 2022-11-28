import React from "react";
import Chart from "../../components/dashboard/Chart";
import FeaturedInfo from "../../components/dashboard/FeaturedInfo";
import { userData } from "../../dummyData";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
import "../../components/dashboard/Dashboard.css";
import SideBar from "../../components/commons/SideBar";
import TopBar from "../../components/commons/TopBar";
import ContentArea from "../website/product/ContentArea";

export default function Dashboard() {
  return (
    <div>
      <TopBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "1160px" }}>
          <div className="dashboard">
            <ContentArea/>
            {/* <FeaturedInfo /> */}
            {/* <Chart
              data={userData}
              title="User Analytics"
              grid
              dataKey="Active User"
            /> */}
            <div className="dashboardWidgets">
              {/* <WidgetSm /> */}
              {/* <WidgetLg /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
