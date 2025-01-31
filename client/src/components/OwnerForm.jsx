import React, { useEffect, useState } from "react";
import "./ownerForm.css";
import axios from "axios";
const OwnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    rooms: "",
  });
  const { name, email, mobile, address, rooms } = formData;
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
    }));
  }, []);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await axios.post(
        "https://beiyositenew-api-alpha.vercel.app/api/owners",
        formData
      );
      console.log(res.data);
      setSuccess(true);
      // Optionally, you can redirect the user here
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };
  return (
    <>
      {success ? (
        <div className="successOwnerForm">
          <p style={{ fontSize: "4rem" }}>
            We'll be reaching out to you soon!!
          </p>
        </div>
      ) : (
        <>
          <div class="RegistrationForm">
            <form class="Form" onSubmit={handleSubmit}>
              <div class="OwnerInformations">
                <h1 style={{ color: "#dcab25" }}>Registration Form</h1>
                <div class="UserFeildInputs">
                  {/* <label for="name">Name</label> */}
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="UserFeildInputs">
                  {/* <label for="mobile">Mobile</label> */}
                  <input
                    type="text"
                    id="mobile"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="UserFeildInputs">
                  {/* <label for="email">Email</label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="UserFeildInputs">
                  {/* <label for="address">Location</label> */}
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Location"
                    value={address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="UserFeildInputs">
                  {/* <label for="rooms">Rooms available in Your Building</label> */}
                  <input
                    type="text"
                    id="rooms"
                    name="rooms"
                    placeholder="Rooms available in Your Building"
                    value={rooms}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                class="ownerButtonForm"
                style={{ color: "black", fontWeight: 600, fontSize: "24px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default OwnerForm;
