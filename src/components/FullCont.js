import React from "react";
import MainCont from "./MainCont";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FullCont = () => {
  return (
    <div>
      <MainCont />
      <Footer />
    </div>
  );
};

export default FullCont;
