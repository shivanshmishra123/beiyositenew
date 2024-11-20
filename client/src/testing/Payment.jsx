import React from "react";
import axios from "axios";
import loadRazorpayScript from "@/loadPaymentfunction/loadRazorpayScript";

// Razorpay script loader
// const loadRazorpayScript = () =>
//   new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });


const PaymentRazor = () => {
  const initiatePayment = async (amount) => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    try {
      // Create an order by calling the backend
      const { data: order } = await axios.post("http://localhost:5000/api/pay/razor/intiate", {
        amount,
      },{headers:{apiKey:"2ef020635c1f449d81217fb993bdf55c"}});

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Beiyo TECHNVEN PRIVATE LIMITED",
        description: "Rent Payment",
        // image: "/", // Optional
        order_id: order.id, // Pass order ID returned by backend
        handler: async (response) => {
          // Verify payment on backend
          try {
            const verification = await axios.post("http://localhost:5000/api/pay/razor/verify", response,{
                headers:{apiKey:"2ef020635c1f449d81217fb993bdf55c"}
            });
            alert("Payment successful! " + verification.data.status);
          } catch (error) {
            alert("Payment verification failed! " + error.response.data.error);
          }
        },
        prefill: {
          name: "Customer Name", // Replace with actual data if available
          email: "customer@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#f7d441",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      alert("Failed to create Razorpay order. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <h2>Pay Rent</h2>
      <button onClick={() => initiatePayment(1)} style={buttonStyle}>
        Pay ₹500
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#3399cc",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default PaymentRazor;
