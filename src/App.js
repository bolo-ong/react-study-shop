import { Navbar, Container, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
// import styled from 'styled-components';

import './App.css';

import bg from './img/bg.png';

import shoesData from './data/shoes.js';

import Card from './component/Card.js';

import Detail from './pages/Detail.js';
import Cart from './pages/Cart.js';


function App() {

  let [shoes, setShoes] = useState(shoesData)
  let navigate = useNavigate()
  let [moreBtnClick, setMoreBtnClick] = useState(0)


  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


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
            <button className="more-button" onClick={() => {
              document.querySelector('.more-button').textContent = 'loading...'
              if (moreBtnClick === 0) {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    let copy = [...shoes, ...result.data]
                    setShoes(copy)
                    document.querySelector('.more-button').textContent = 'more'
                    setMoreBtnClick(moreBtnClick + 1)
                  })
                  .catch(() => {
                    console.log('ajax요청 실패')
                    document.querySelector('.more-button').textContent = 'more'
                  })
              }
              if (moreBtnClick === 1) {
                axios.get('https://codingapple1.github.io/shop/data3.json')
                  .then((result) => {
                    let copy = [...shoes, ...result.data]
                    setShoes(copy)
                    document.querySelector('.more-button').textContent = 'more'
                    setMoreBtnClick(moreBtnClick + 1)

                  })
                  .catch(() => {
                    console.log('ajax요청 실패')
                    document.querySelector('.more-button').textContent = 'more'
                  })
              }
              if (moreBtnClick >= 2) {
                document.querySelector('.more-button').style.display = 'none'
                setMoreBtnClick(moreBtnClick + 1)
              }
            }}>more</button>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>404</div>} />

        <Route path="/event" element={<><h4>오늘의 이벤트</h4><Outlet></Outlet></>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="/cart" element={<Cart />} />
      </Routes>


    </div>
  );
}

export default App;
