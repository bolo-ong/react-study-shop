import { Link } from 'react-router-dom';

function Card(props) {

    return (
        <Link to={`/detail/${props.i}`} className="col-md-4" key={props.i} style={{ color: 'black', textDecoration: 'none' }}>
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" alt='' />
            <h4>{props.shoes['title']}</h4>
            <p>{props.shoes['price']}</p>
        </Link >
    )
}

export default Card