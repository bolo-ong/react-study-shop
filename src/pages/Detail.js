import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail(props) {

    let { id } = useParams();
    let originShoes = props.shoes.find((data) => { return data.id === parseInt(id) }) // ==data.id === parseInt(id), arrow function에선 return과 중괄호 생략가능
    let [sale, setSale] = useState(0)
    let [qty, setQty] = useState('')

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

            <div className="container" >
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${originShoes['id'] + 1}.jpg`} width="100%" alt='' />
                    </div>



                    <div className="col-md-6">
                        <input type="text" class="form-control" style={{ display: 'inline', width: '10%' }} onChange={(e) => { setQty(e.target.value) }} />
                        <h4 className="pt-5">{originShoes['title']}</h4>
                        <p>{originShoes['content']}</p>
                        <p>{originShoes['price']}</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div >
        </>
    )
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