import * as React from "react";
import { useState, useEffect } from "react";
import Sanpham from "./../admin/Sanpham";
import Themsanpham from "./../admin/Themsanpham";
import Thongtindathang from "../admin/Thongtindamua";
import "./assets/css/Style.css";
const Admin = () => {
  return (
    <>
      <Sanpham />
      <Themsanpham />
      <Thongtindathang />
    </>
  );
};

export default Admin;
