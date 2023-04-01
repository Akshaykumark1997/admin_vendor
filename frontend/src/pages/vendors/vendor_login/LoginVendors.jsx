import React from "react";
import NavBar from "../../../components/shared/navbar/NavBar";
import VendorLogin from "../../../components/vendors/vendor_login/VendorLogin";
import Footer from "../../../components/vendors/footer/Footer";

function LoginVendors() {
  return (
    <div>
      <NavBar />
      <VendorLogin />
      <Footer />
    </div>
  );
}

export default LoginVendors;
