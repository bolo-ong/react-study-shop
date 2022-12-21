import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import bg from './img/bg.png';
import shoesData from './data/shoes.js';
import Detail from './pages/Detail.js';
import Card from './component/Card.js';


function App() {

  let [shoes] = useState(shoesData)
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">home</Link>
      <Link to="detail">상세 페이지</Link> */}

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>

            <div className="container">
              <div className="row">
                {shoes.map((data, i) => {
                  return <Card shoes={data} i={i} />
                })}
              </div>
            </div>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>404</div>} />

        <Route path="/event" element={<><h4>오늘의 이벤트</h4><Outlet></Outlet></>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
      </Routes>

    </div>
  );
}


export default App;
