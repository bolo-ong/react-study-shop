import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux'
import { addItem } from '../store'

function Detail(props) {

    let dispatch = useDispatch()

    let { id } = useParams();
    let originShoes = props.shoes.find((data) => { return data.id === parseInt(id) }) // ==data.id === parseInt(id), arrow function에선 return과 중괄호 생략가능
    let [sale, setSale] = useState(0)
    let [qty, setQty] = useState('')
    let [tab, setTab] = useState(0)
    let [fade, setFade] = useState('')

    useEffect(() => {
        let timer = setTimeout(() => { setFade('end') }, 10)
        return () => {
            clearTimeout(timer)
            setFade('')
        }
    }, [])

    useEffect(() => {
        let timer = setTimeout(() => {
            setSale(1)
        }, 2000)
    }, [])

    useEffect(() => {
        if (isNaN(qty)) {
            document.querySelector('.form-control').value = ''
            return alert('숫자만 입력 가능합니다')
        }
    }, [qty])

    return (
        <>
            <div className="container">
                {
                    sale === 0 ?
                        <div className="alert alert-warning">
                            2초 이내 구매 시 할인
                        </div>
                        : null
                }
            </div>

            <div className={`container start ${fade}`} >
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${originShoes['id'] + 1}.jpg`} width="100%" alt='' />
                    </div>



                    <div className="col-md-6">
                        <input type="text" class="form-control" style={{ display: 'inline', width: '10%', marginTop: '10px' }} onChange={(e) => { setQty(e.target.value) }} />
                        <h4 className="pt-5">{originShoes['title']}</h4>
                        <p>{originShoes['content']}</p>
                        <p>{originShoes['price']}</p>
                        <button className="btn btn-danger"
                            onClick={() => {
                                dispatch(addItem(originShoes))
                            }}>주문하기</button>
                    </div>
                </div>

                <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link eventKey="link0" onClick={() => setTab(0)}>버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link1" onClick={() => setTab(1)}>버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link2" onClick={() => setTab(2)}>버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab} />

            </div >
        </>
    )
}
function TabContent({ tab }) {
    // if (tab === 0) {
    //     return <div>내용0</div>
    // }
    // if (tab === 1) {
    //     return <div>내용1</div>
    // }
    // if (tab === 2) {
    //     return <div>내용2</div>
    // }

    // useEffect(() => {
    //     document.querySelector('.tab-controller').addEventListener('click', () => {
    //         document.querySelector('.start').classList.remove('end')
    //         setTimeout(() => { document.querySelector('.start').classList.add('end') }, 10)
    //     })
    // }, [tab])
    let [fade, setFade] = useState('')

    useEffect(() => {
        let timer = setTimeout(() => { setFade('end') }, 10)
        return () => {
            clearTimeout(timer)
            setFade('')
        }
    }, [tab])

    return <div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
}



function Sale() {
    return (
        <div className="container">
            <div className="alert alert-warning">
                2초 이내 구매 시 할인
            </div>
        </div>
    )
}

export default Detail