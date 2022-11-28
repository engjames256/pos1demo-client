import React from "react";
import TopNav from "../commons/TopNav";
import MainPage from "../mainpage/MainPage";
import Newsletters from "../newsletter/Newsletters";
import Testimonials from "../testimonial/Testimonials";
// import ContactInfo from "../contact/ContactInfo";
import ContentArea from "../product/ContentArea";
import Login from "../login/Login";

export default function () {
  // <script type="text/javascript">
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/62377a31a34c2456412bf77e/1fukbalkt";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
  // </script>
  return (
    <div style={{margin:"auto"}}>
      < Login />
      {/* <TopNav /> */}

      {/* <MainPage /> */}
      {/* <ContentArea /> */}
      {/* <Testimonials /> */}
      {/* <Newsletters /> */}
      {/* <ContactInfo /> */}
    </div >
  );
}
