// import "./Payment.css";
// import FlutterwaveCheckout from "flutterwave-node-v3";

// export default function makePayment() {
//   {
//     FlutterwaveCheckout({
//       public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
//       tx_ref: "titanic-48981487343MDI0NzMx",
//       amount: 500,
//       currency: "UGX",
//       payment_options: "card, banktransfer, ussd",
//       redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
//       meta: {
//         consumer_id: 23,
//         consumer_mac: "92a3-912ba-1192a",
//       },
//       customer: {
//         email: "rose@unsinkableship.com",
//         phone_number: "08102909304",
//         name: "Rose DeWitt Bukater",
//       },
//       customizations: {
//         title: "The Titanic Store",
//         description: "Payment for an awesome cruise",
//         logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
//       },
//     });
//   }
//   return (
//     <div className="payment">
//       <form>
//         <div>Your order is 500</div>
//         <button type="button" id="start-payment-button" onclick="makePayment()">
//           Pay Now
//         </button>
//       </form>
//     </div>
//   );
// }
