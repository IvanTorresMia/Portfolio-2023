import "./App.css";
import React from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Routes } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Main from "./Pages/Main";
import { Layout, Menu, Space } from "antd";
import { Header } from "antd/es/layout/layout";

function App() {
  return (
    <div className="main-bc">
      <div className="sider-menu">
        <Header>
          <Space className="header font-xl p-m main-bc d-flex justify-content-between">
            <div className="text-color-w font-robo">Ivan Codes</div>
            <div
              className="d-flex justify-content-between"
              style={{ width: "100px" }}
            >
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </Space>
        </Header>

        <SideNav />
      </div>
      <Routes>
        <Route path="" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
