import React,{useState} from "react";
import Sidebar from "../Components/Sidebar";
import { Row, Col ,Button} from "antd";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Row>
        <Sidebar />
        <Col span={8}>
          <header>
            <h1 style={{ textAlign: "center" }}>HOME</h1>
          </header>

          <div style={{ margin: 50 , width:500}}>
            <h1>Hello This Is Task 01!</h1>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
