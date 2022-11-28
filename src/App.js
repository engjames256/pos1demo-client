import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";

import TopBar from "./components/commons/TopBar";
import SideBar from "./components/commons/SideBar";
import Dashboard from "./components/dashboard/Dashboard";

import User from "./components/users/User";
import NewUser from "./components/users/NewUser";
import UserList from "./components/users/UserList";

import Product from "./components/products/Product";
import NewProduct from "./components/products/NewProduct";
import ProductList from "./components/products/ProductList";

import Coupon from "./components/coupons/Coupon";
import NewCoupon from "./components/coupons/NewCoupon";
import CouponList from "./components/coupons/CouponList";

import Sale from "./components/sales/Sales";
import NewSale from "./components/sales/NewSale";
import SaleList from "./components/sales/SaleList";

import Newsletter from "./components/newsletters/Newsletter";
import NewNewsletter from "./components/newsletters/NewNewsletter";
import NewsletterList from "./components/newsletters/NewsletterList";

import Testimonial from "./components/testimonials/Testimonials";
import NewTestimonial from "./components/testimonials/NewTestimonial";
import TestimonialList from "./components/testimonials/TestimonialList";

import Feedback from "./components/feedbacks/Feedbacks";
import NewFeedback from "./components/feedbacks/NewFeedback";
import FeedbackList from "./components/feedbacks/FeedbackList";

import Message from "./components/messages/Messages";
import NewMessage from "./components/messages/NewMessage";
import MessageList from "./components/messages/MessageList";

import Reservation from "./components/reservations/Reservation";
import NewReservation from "./components/reservations/NewReservation";
import ReservationList from "./components/reservations/ReservationList";

import Home from "./components/website/home/Home";
import Protected from "./components/protected/Protected";

let user = JSON.parse(localStorage.getItem("user"));

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}>
            {/* <Protected component={Dashboard} /> */}
          </Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
          <Route path="/coupons" element={<CouponList />}></Route>
          <Route path="/coupon/:couponId" element={<Coupon />}></Route>
          <Route path="/newcoupon" element={<NewCoupon />}></Route>
          <Route path="/sales" element={<SaleList />}></Route>
          <Route path="/sale/:saleId" element={<Sale />}></Route>
          <Route path="/newsale" element={<NewSale />}></Route>
          <Route path="/newsletters" element={<NewsletterList />}></Route>
          <Route
            path="/newsletter/:newsletterId"
            element={<Newsletter />}
          ></Route>
          <Route path="/newnewsletter" element={<NewNewsletter />}></Route>
          <Route path="/testimonials" element={<TestimonialList />}></Route>
          <Route
            path="/testimonial/:testimonialId"
            element={<Testimonial />}
          ></Route>
          <Route path="/testimonial" element={<NewTestimonial />}></Route>
          <Route path="/feedbacks" element={<FeedbackList />}></Route>
          <Route path="/feedback/:feedbackId" element={<Feedback />}></Route>
          <Route path="/feedback" element={<NewFeedback />}></Route>
          <Route path="/messages" element={<MessageList />}></Route>
          <Route path="/message/:messageId" element={<Message />}></Route>
          <Route path="/message" element={<NewMessage />}></Route>
          <Route path="/reservations" element={<ReservationList />}></Route>
          <Route
            path="/reservation/:reservationId"
            element={<Reservation />}
          ></Route>
          <Route path="/reservation" element={<NewReservation />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
