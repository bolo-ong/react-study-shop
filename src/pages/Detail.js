import { useParams } from "react-router-dom"

function Detail(props) {

    let { id } = useParams();
    let originShoes = props.shoes.find((data) => { return data.id === parseInt(id) }) // ==data.id === parseInt(id), arrow function에선 return과 중괄호 생략가능

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${originShoes['id'] + 1}.jpg`} width="100%" alt='' />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{originShoes['title']}</h4>
                    <p>{originShoes['content']}</p>
                    <p>{originShoes['price']}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div >
    )
}

export default Detail