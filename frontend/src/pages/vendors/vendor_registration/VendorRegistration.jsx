import React from "react";
import NavBar from "../../../components/shared/navbar/NavBar";
import Registration from "../../../components/vendors/registration/Registration";
import Footer from "../../../components/vendors/footer/Footer";

export default function VendorRegistration() {
  return (
    <div>
      <NavBar />
      <Registration />
      <Footer/>
    </div>
  );
}
