import * as React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import EditSanpham from "./EditSanpham";
const Thongtindathang = () => {
  return (
    <div>
      <div className="left-side-menu border-dark border-4 border-end">
        <div className="slimscroll-menu">
          <div className="row p-4">
            <div className="col">
              <img src={logo} alt="" className=" img-fluid " />
            </div>
          </div>
          <div id="sidebar-menu ">
            <div className="text-secondary">
              <ul
                className="metismenu text-start justify-content-start ps-0 ms-0   "
                id="side-menu"
              >
                <li
                  style={{ listStyle: "none", paddingLeft: 0, marginLeft: 0 }}
                >
                  <div
                    style={{
                      textDecoration: "none",
                      display: "block",
                      padding: "15px 20px",
                      color: "#ffffff",
                      fontSize: "1.2em",
                      fontWeight: "bold",
                    }}
                  >
                    <i className="fa-solid fa-book-open pe-2" />
                    <span> Pages </span>
                    <span className="menu-arrow" />
                  </div>
                  <ul className="nav-second-level ms-5" aria-expanded="false">
                    <li>
                      <NavLink className="nav-link" to="/sanpham">
                        Sản phẩm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/themsanpham">
                        Thêm sản phẩm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="#">
                        Thông tin đặt hàng
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="bg-secondary-subtle">
        <main className="main-content   ">
          <div className="pt-5">
            <div className="row ps-5 pt-3  ">
              <div className="col">
                <h2
                  className="display-6"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  Thông Tin Đặt Hàng
                </h2>
              </div>
              <div className="col text-end me-4 pt-3">
                Pages &gt;{" "}
                <span className="text-info  align-middle">
                  Thông Tin Đặt Hàng
                </span>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="card-body  pb-5 text-center ">
              <table className="table  table-bordered border border border-dark rounded-5 ">
                <thead>
                  <tr>
                    <th>IDCARD</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th>Địa chỉ </th>
                    <th>Số lượng</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>1</td>
                    <td>499.000</td>
                    <td>Nguyễn Văn A</td>
                    <td>0389958877</td>
                    <td>Tp hcm</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>1</td>
                    <td>499.000</td>
                    <td>Nguyễn Văn A</td>
                    <td>0389958877</td>
                    <td>Tp hcm</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>1</td>
                    <td>499.000</td>
                    <td>Nguyễn Văn A</td>
                    <td>0389958877</td>
                    <td>Tp hcm</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>1</td>
                    <td>499.000</td>
                    <td>Nguyễn Văn A</td>
                    <td>0389958877</td>
                    <td>Tp hcm</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>1</td>
                    <td>499.000</td>
                    <td>Nguyễn Văn A</td>
                    <td>0389958877</td>
                    <td>Tp hcm</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>1</td>
                    <td>499.000</td>
                    <td>Nguyễn Văn A</td>
                    <td>0389958877</td>
                    <td>Tp hcm</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>1</td>
                    <td>499.000</td>
                    <td>Nguyễn Văn A</td>
                    <td>0389958877</td>
                    <td>Tp hcm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ height: 400 }}></div>
        </main>
      </div>
    </div>
  );
};

export default Thongtindathang;
