import React from "react";
import "./ListyourProperty.css";
import OwnerForm from "../components/OwnerForm";
import {
  Brain,
  MapPinned,
  Wrench,
  CircleDollarSign,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { DollarSign } from "lucide-react";

const ListYourProperty = () => {
  return (
    <div className="listyourPropertyDiv">
      <div className="mainList">
        <h1>
          <span style={{ color: "#ffc72c" }}>List</span> Your Property
        </h1>
        <div className="sublist">
          <h1>Unlock the True Potential of your Building!</h1>
          <h3 style={{ textAlign: "center" }}>Why Us?</h3>

          <div className="leftlist">
            <div className="listFeatureDiv">
              <Wrench className="icon" />
              <div className="contentListdiv">
                <h2>House Maintainance</h2>
                <p>-We do frequent house repairs</p>
              </div>
            </div>
            <div className="listFeatureDiv">
              <MapPinned className="icon" />
              <div className="contentListdiv">
                <h2>Goodbye to Unnoticed Rooms</h2>
                <p>-We're Showcasing them Online</p>
              </div>
            </div>
            <div className="listFeatureDiv">
              <Brain className="icon" />
              {/* <img src="./images/brain.png" alt="" style={{ height: "4rem" }} /> */}
              <div className="contentListdiv">
                <h2>Unburdened Mind</h2>
                <p>-Simplified hostel/PG management with Beiyo</p>
              </div>
            </div>
            <div className="listFeatureDiv">
              <Handshake className="icon" />
              <div className="contentListdiv">
                <h2>Comprehensive Services</h2>
                <p>- From Maintenance to Design, Leave it All to Us!</p>
              </div>
            </div>
            <div className="listFeatureDiv">
              <CircleDollarSign className="icon" />
              <div className="contentListdiv">
                <h2>Effortless Rent Collection</h2>
                <p>- Guaranteed Payment Every First Week</p>
              </div>
            </div>
            <div className="listFeatureDiv">
              <ShieldCheck className="icon" />
              <div className="contentListdiv">
                <h2>Fully Secured</h2>
                <p> -Complete Tenant Details Access on Our Platform</p>
              </div>
            </div>
          </div>

          <div className="stats-outer-div">
            <h3 className="fastest" style={{ textAlign: "center" }}>
              We are the{" "}
              <span style={{ color: "#dcab25" }}>Fastest Growing</span> Hostel
              Business
            </h3>

            <div className="stats-container-div">
              <div className="stats" style={{ textAlign: "center" }}>
                <div style={{ color: "#ffc72c", fontWeight: 600 }}>500+</div>
                <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                  Happy Customers
                </p>
              </div>
              <div className="stats" style={{ textAlign: "center" }}>
                <div style={{ color: "#ffc72c", fontWeight: 600 }}>10+</div>
                <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                  Hostels
                </p>
              </div>
              <div className="stats" style={{ textAlign: "center" }}>
                <div style={{ color: "#ffc72c", fontWeight: 600 }}>3+</div>
                <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                  Community Events
                </p>
              </div>
            </div>
            <h2 style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Fill the form - And turn your Property into Profit with Ease❤️
            </h2>
          </div>

          <br />

          <div className="rightlist">
            <OwnerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListYourProperty;
