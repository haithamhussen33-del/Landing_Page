import React from "react";
import "../styles/HeaderTop.css";
import MyLocationSharpIcon from "@mui/icons-material/MyLocationSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-container">
        <div className="contact-info">
          <span>
            <a href="mailto:info@casapiugroup.com">
              <EmailSharpIcon fontSize="small" /> info@casapiugroup.com
            </a>
          </span>
          <span>
            <a href="tel:+971551234567">
              <LocalPhoneSharpIcon fontSize="small" /> +971 55 123 4567
            </a>
          </span>
        </div>
        <div className="top-links">
          <a href="https://maps.app.goo.gl/urFcTHFrgSBQYedx7" target="_blank">
            <MyLocationSharpIcon fontSize="small" /> UAE DUBAI ALGOZE FIRST -ADEL MOH ALMARZOUQI-OFFICE 33
          </a>
        </div>
      </div>
    </div>
  );
}
