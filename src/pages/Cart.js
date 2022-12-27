import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart() {

    let state = useSelector((state) => state)
    console.log(state.cart)

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.cart.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{state.cart[i]['name']}</td>
                                <td>{state.cart[i]['count']}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}
export default Cart