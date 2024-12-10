
import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Button, Collapse, IconButton } from '@mui/material';
// import { ExpandMore, ExpandLess } from '@mui/icons-material';
import AuthContext from '../../../context/AuthContext';
import { add, format } from 'date-fns';
import '../Dashboard.css';
import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react';
import dayjs from 'dayjs';
import api from '@/api/apiKey';
import Cookies from 'js-cookie';
import loadRazorpayScript from '@/loadPaymentfunction/loadRazorpayScript';
import { useNavigate } from 'react-router-dom';



const PaymentStatus = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandFuturePayments, setExpandFuturePayments] = useState(false);
  const [expandPastPayments, setExpandPastPayments] = useState(false);
  const [dueAmountPayment,setDueAmountPayment]=useState(null);
  const { user } = useContext(AuthContext);
  const [selectedItems, setSelectedItems] = useState({
    maintainaceCharge: true,
    securityDeposit: true,
    extraDayPaymentAmount: true,
  });
  const[dueAmountToBePayed,setDueAmountToBePayed]=useState(user.dueAmount);
  const [duePaymentStatus, setDuePaymentStatus] = useState({
      maintainaceChargeStatus:true,
      securityDepositStatus:true,
      extraDayPaymentAmountStatus:true,
  });
  const navigate = useNavigate();


  const formatDate = (date) => {
    const d = new Date(date);
    const formattedDate = format(d, "do MMMM yyyy");
    return formattedDate;
  };
  const today = dayjs();
  const dayofMonth = today.date();
  let additionalCharge = 0;

  if (dayofMonth > 7) {
    additionalCharge = (dayofMonth - 7) * 100;
  }
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = Cookies.get('token');
        const response = await api.get(`https://beiyo-admin.in/api/dashboard/payment/userPayments/${user._id}`, {
          headers: { Authorization: `Bearer ${token}`} 
        });
        setPayments(response.data);
       
      } catch (error) {
        console.error('Error fetching payments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, [user._id]);

  useEffect( () =>{
    const fetchDueAmountPayment = async()=>{
      try {
        const token = Cookies.get('token');
        const response = await api.get(`https://beiyo-admin.in/api/dashboard/payment/dueAmount/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` } 
        });
        setDueAmountPayment(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      } finally {
        setLoading(false);
      }
    }
     fetchDueAmountPayment(); 

  },[user._id])

  const handleCurrentMonthPayment = async (id)=>{
      const token = Cookies.get('token');
     const response = await api.get(`https://beiyo-admin.in/api/dashboard/payment/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const amount = response.data.amount+additionalCharge;

    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    try {
      // Create an order by calling the backend
      const { data: order } = await api.post("https://beiyo-admin.in/api/pay/razor/intiate", {
        amount,
      });

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
            const verification = await api.post("https://beiyo-admin.in/api/pay/razor/verify", response);
            alert("Payment successful! " + verification.data.status);
            if(verification.data.status==="Payment verified"){
              try {
                 await api.put(`https://beiyo-admin.in/api/dashboard/onlinePaymentSave/${id}`);
                // refetch payments
                const updatedPayments = await api.get(`https://beiyo-admin.in/api/dashboard/payment/userPayments/${user._id}`, {
                  headers: { Authorization: `Bearer ${token}` },
                    });
                    setPayments(updatedPayments)
              } catch (error) {
                console.error('Error saving payment:', error);
              }
            }
          } catch (error) {
            alert("Payment verification failed! " + error.response.data.error);
          }
        },
        prefill: {
          name: user.name, // Replace with actual data if available
          email: user.email,
          contact: user.mobileNumber,
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
  }

  const handleFuturePayment = async (id) => {
    const token = Cookies.get('token');
    const response = await api.get(`https://beiyo-admin.in/api/dashboard/payment/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const amount = response.data.amount;

    
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    try {
      // Create an order by calling the backend
      const { data: order } = await api.post("https://beiyo-admin.in/api/pay/razor/intiate", {
        amount,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Beiyo TECHNVEN PRIVATE LIMITED",
        description: "Future Month Rent Payment",
        // image: "/", // Optional
        order_id: order.id, // Pass order ID returned by backend
        handler: async (response) => {
          // Verify payment on backend
          try {
            const verification = await api.post("https://beiyo-admin.in/api/pay/razor/verify", response);
           
            if(verification.data.status==="Payment verified"){
              try {
               await api.put(`https://beiyo-admin.in/api/dashboard/onlinePaymentSave/${id}`);
                    // Re-fetch the payments
          const updatedPayments = await api.get(`https://beiyo-admin.in/api/dashboard/payment/userPayments/${user._id}`, {
            headers: { Authorization: `Bearer ${token}` },
              });
    setPayments(updatedPayments.data);
              } catch (error) {
                console.error('Error saving payment:', error);
              }
            }
          } catch (error) {
            alert("Payment verification failed! " + error.response.data.error);
          }
        },
        prefill: {
          name: user.name, // Replace with actual data if available
          email: user.email,
          contact: user.mobileNumber,
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

  if (loading) return <CircularProgress />;

  // Get the current month and year
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // Separate payments into current, future, and past
  const currentPayments = payments.filter(payment => {
    const paymentDate = new Date(payment.date);
    return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;  
  });
  
  const futurePayments = payments.filter(payment => {
    const paymentDate = new Date(payment.date);
    if(paymentDate.getFullYear()>currentYear){
      return paymentDate.getFullYear()>currentYear;
    }else if(paymentDate.getFullYear()===currentYear){
      if(paymentDate.getMonth()>currentMonth){
        return paymentDate.getMonth()>currentMonth;
      }
    }
  });

  const pastPayments = payments.filter(payment => {
    const paymentDate = new Date(payment.date);
    // return paymentDate.getMonth() < currentMonth || paymentDate.getFullYear() < currentYear;
    if(paymentDate.getFullYear()<currentYear){
      return paymentDate.getFullYear()<currentYear;
    }else if(paymentDate.getFullYear()===currentYear){
      if(paymentDate.getMonth()<currentMonth){
        return paymentDate.getMonth()<currentMonth;
      }
    }
  });

  const updateDuePaymentStatus =  (stepData) => {
    setDuePaymentStatus((prev) => ({ ...prev, ...stepData }));
  };

  const handleCheckboxChange = async (item) => {
    const updatedSelection = {
      ...selectedItems,
      [item]: !selectedItems[item], // Toggle the checkbox state
    };
    setSelectedItems(updatedSelection);

    // Update booking data with the corresponding status
    let amountToPay = 0;


 
    if (updatedSelection.maintainaceCharge) {
      amountToPay += user.maintainaceCharge;
    }
    if (updatedSelection.securityDeposit) {
      amountToPay += Number(user.deposit);
       updateDuePaymentStatus({securityDepositStatus:true})
    }
    if (updatedSelection.extraDayPaymentAmount) {
      amountToPay += Number(user.extraDayPaymentAmount);
      updateDuePaymentStatus({extraDayPaymentAmountStatus:true})
    
    }
    // let dueAmount = user.dueAmount-amountToPay;
    setDueAmountToBePayed(amountToPay)
    // Set total amount and update booking details    
  };

  const handleDuePayment=async(id)=>{
    try {
      const amount = dueAmountToBePayed
     
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    try {
      // Create an order by calling the backend
      const { data: order } = await api.post("https://beiyo-admin.in/api/pay/razor/intiate", {
        amount,
      },{headers:{apiKey:"2ef020635c1f449d81217fb993bdf55c"}});

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Beiyo TECHNVEN PRIVATE LIMITED",
        description: "Due Payment",
        // image: "/", // Optional
        order_id: order.id, // Pass order ID returned by backend
        handler: async (response) => {
          // Verify payment on backend
          try {
            const verification = await api.post("https://beiyo-admin.in/api/pay/razor/verify", response);
            // alert("Payment successful! " + verification.data.status);
            if(verification.data.status==="Payment verified"){
              try {
                const duePaymentResponseSave = await api.put(`https://beiyo-admin.in/api/dashboard/payment/dueAmount/onlinePayed/${id}`, {
                  maintainaceChargeStatus: duePaymentStatus.maintainaceChargeStatus,
                  depositStatus: duePaymentStatus.securityDepositStatus,
                  extraDayPaymentAmountStatus: duePaymentStatus.extraDayPaymentAmountStatus
                });
                console.log(duePaymentStatus.extraDayPaymentAmountStatus)
                const token = Cookies.get('token')
                const response = await api.get(`https://beiyo-admin.in/api/dashboard/payment/dueAmount/${user._id}`, {
                  headers: { Authorization: `Bearer ${token}` } 
                });
                setDueAmountPayment(response.data);
              } catch (error) {
                console.log(error);
              }
            }
          } catch (error) {
            alert("Payment verification failed! " + error.response.data.error);
          }
        },
        prefill: {
          name: user.name, // Replace with actual data if available
          email: user.email,
          contact: user.mobileNumber,
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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='paymentDetails flex flex-col gap-4'>
      <Typography variant="h4" gutterBottom>Payment Status</Typography>

    <div className='flex flex-col gap-4'>
  {dueAmountPayment&&dueAmountPayment.status==='due'&&dueAmountPayment.amount!==0&&(
      <div className=' flex flex-col gap-2 border-2 p-2 border-black rounded-lg'>
      <Typography variant="h6" gutterBottom>DueAmount</Typography>
      
        <div key={dueAmountPayment&&dueAmountPayment._id}  className='h-fit p-2 flex justify-between items-center border-2 border-[#575756]'>
        <div className='flex flex-col gap-[0.2rem]'>
        <Typography variant="body1">Total Amount: {dueAmountPayment&&dueAmountPayment.amount}</Typography>
          <Typography variant="body2">Date: {dueAmountPayment&&formatDate(dueAmountPayment.date)}</Typography>
          <Typography variant="body2">Status: {dueAmountPayment&&dueAmountPayment.status}</Typography>
          {dueAmountPayment&&dueAmountPayment.cash&&(<Typography variant="body2">Payment done by cash</Typography>)}
          <Typography variant="body2">Amount want to pay: {dueAmountToBePayed}</Typography>
        </div>
          {dueAmountPayment&&dueAmountPayment.status === 'due' && <button className='bg-[#f7d442] border-black border-2 rounded-full p-2' onClick={() => handleDuePayment(dueAmountPayment&&dueAmountPayment._id)}>Pay Now</button>}
        </div>
        <div className="mb-4">

{!user.maintainaceChargeStatus&&(
       <div>
       <label className="flex items-center mb-2">
         <input 
           type="checkbox" 
           checked={selectedItems.maintainaceCharge}
           onChange={() => handleCheckboxChange('maintainaceCharge')}
           className="mr-2"
           disabled
         />
         Maintance Charges - ₹{user.maintainaceCharge}
       </label>
     </div>
)}
{
!user.depositStatus&&(
  <div>
  <label className="flex items-center mb-2">
    <input 
      type="checkbox" 
      checked={selectedItems.securityDeposit}
      onChange={() => handleCheckboxChange('securityDeposit')}
      className="mr-2"
      disabled= {user.maintainaceCharge&&user.extraDayPaymentAmountStatus}
    />
    Security Deposit Amount [1 Month Rent] - ₹{user.deposit}
  </label>
</div>
)
}
{!user.extraDayPaymentAmountStatus&&(
       <div>
       <label className="flex items-center mb-2">
         <input 
           type="checkbox" 
           checked={selectedItems.extraDayPaymentAmount}
           onChange={() => handleCheckboxChange('extraDayPaymentAmount')}
           className="mr-2"
           disabled={user.depositStatus&&user.maintainaceCharge}
         />
         Advance Rent Amount [For {user.extraDays} Day] - ₹{user.extraDayPaymentAmount}
       </label>
     </div>
)}
    </div>      
    </div>
  )}
            {/* Current Payments */}
{currentPayments!==null?(
              <div className=' flex flex-col gap-2 border-2 p-2 border-black rounded-lg'>
              <Typography variant="h6" gutterBottom>Current Month Payment</Typography>
              {currentPayments.map(payment => (
                <div key={payment._id}  className='h-fit p-2 flex justify-between items-center border-2 border-[#575756]'>
                <div className='flex flex-col gap-[0.2rem]'>
                <Typography variant="body1">Amount: {payment.amount}</Typography>
               {payment.status==='due'&&( additionalCharge!==0&&(<Typography>Additional charge: {additionalCharge}</Typography>))}
                  <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
                  <Typography variant="body2">Status: {payment.status}</Typography>
                  {payment.cash&&(<Typography variant="body2">Payment done by cash</Typography>)}
                </div>
                  {payment.status === 'due' && <button className='bg-[#f7d442] border-black border-2 rounded-full p-2' onClick={() => handleCurrentMonthPayment(payment._id)}>Pay Now</button>}
                </div>
              ))}
            </div>
):(
  <Typography variant="body1">No currentMonth Payments</Typography>
)}

      {/* Future Payments */}
      <div className=' flex flex-col gap-4 border-2 p-2 border-black rounded-lg'>
        <div className="flex items-center justify-between ">
          <Typography variant="h6" gutterBottom>Future Payments</Typography>
          <IconButton onClick={() => setExpandFuturePayments(!expandFuturePayments)}>
            {expandFuturePayments ? <ChevronUpCircle  /> : <ChevronDownCircle />}
          </IconButton>
        </div>
        <Collapse in={expandFuturePayments}>
         <div className='flex flex-col gap-2'>
    {futurePayments?(
      <div>
             {futurePayments.map(payment => (
              <div key={payment._id}  className='h-fit p-2  flex justify-between items-center border-2 border-[#575756] rounded-lg'>
               <div className='flex flex-col gap-[0.2rem]'>
               <Typography variant="body1">Amount: {payment.amount}</Typography>
                <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
                <Typography variant="body2">Status: {payment.status}</Typography>
                {payment.cash  &&(<Typography variant="body2">Payment done by cash</Typography>)}
               </div>
                {payment.status === 'due' && <button className='bg-[#f7d442] border-black border-2 rounded-full p-2' onClick={() => handleFuturePayment(payment._id)}>Pay Now</button>}
              </div>
            ))}
            </div>
    ):(
      <Typography variant="body1">No Future Payments available</Typography>
    )}
         </div>
        </Collapse>
      </div>

      {/* Past Payments */}
      <div className='flex flex-col gap-2 border-2 p-2 border-black rounded-lg'>
        <div className="flex items-center justify-between ">
          <Typography variant="h6" gutterBottom>Past Month Payments</Typography>
          <IconButton onClick={() => setExpandPastPayments(!expandPastPayments)}>
            {expandPastPayments ?<ChevronUpCircle /> : <ChevronDownCircle />}
          </IconButton>
        </div>
        <Collapse in={expandPastPayments}>
{pastPayments!==null?(<div>
            {pastPayments.map(payment => (
              <div key={payment._id} sx={{ p: 2, border: '1px solid #ccc' }} className='h-fit p-2 flex justify-between items-center border-2 border-[#575756]'>
              <div className='flex flex-col gap-[0.2rem]'>
              <Typography variant="body1">Amount: {payment.amount}</Typography>
                <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
                <Typography variant="body2">Status: {payment.status}</Typography>
                {payment.cash===true &&(<Typography variant="body2">Payment done by cash</Typography>)}
              </div>
              </div>
            ))}
            </div>
):(
  <Typography variant="body1">No Past Payments available</Typography>
)}
        </Collapse>
      </div>
    </div>
    </div>
  );
};

export default PaymentStatus;

