function Card(props) {
    return (
        <div className="col-md-4" key={props.i}>
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" alt='' />
            <h4>{props.shoes['title']}</h4>
            <p>{props.shoes['price']}</p>
        </div>
    )
}

export default Card