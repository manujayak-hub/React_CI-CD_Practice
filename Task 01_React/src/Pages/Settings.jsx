import React from "react";
import Sidebar from "../Components/Sidebar";
import {  Row,Col} from "antd";

const Settings = () => {
  return (
    <>
       <Row>
    <Sidebar />
        <Col span={8}>
        <header>
            <h1 style={{textAlign:"center"}}>Settings</h1>
        </header>

        <div style={{margin:20, width:500}}>
            <h1>
                Hello This Is Task 01!
            </h1>
        </div >
        </Col>
    </Row>
      
    </>
  );
};

export default Settings;
