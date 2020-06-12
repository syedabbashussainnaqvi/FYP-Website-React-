import React, { Component } from "react";
import "rc-footer/assets/index.css";
import Footer from "rc-footer";
import logo from "../../../Assets/logo.svg";
import fb from "../../../Assets/fb.svg";
import lk from "../../../Assets/lk.png";
const footer = () => {
  return (
    <Footer
      backgroundColor="#363636"
      style={{ backgroundColor: "#363636" }}
      columns={[
        {
          title: "Forest Change Detection",
          icon: <img src={logo} />,
          items: [
            {
              description:
                "This website is is created as a demo for our FYP. It gives the brief overview of our entire project",
            },
            {
              description:
                "This website gives the brief overview of our entire project ",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              title: "Home",
              url: "/home",
            },
            {
              title: "About Us",
              url: "/aboutUs",
            },
            {
              title: "Demo",
              url: "/classification",
            },
          ],
        },
        {
          title: "Social Media Links",
          items: [
            {
              icon: <img src={fb} style={{ width: "40px", height: "40px" }} />,
              url: "https://www.facebook.com/abbas.hussain.121772",
            },
            {
              icon: <img src={lk} style={{ width: "40px", height: "40px" }} />,
              url: "https://www.linkedin.com/in/abbas-naqvi-/",
            },
          ],
        },
      ]}
      bottom="Made by R & A "
    />
  );
};

export default footer;
