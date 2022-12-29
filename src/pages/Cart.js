import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { changeName } from '../store'
import { addQty } from '../store'

function Cart() {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()

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
                    state.cart.map((data, i) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{state.cart[i]['name']}</td>
                            <td>{state.cart[i]['count']}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(addQty(data['id']))
                                }}>+</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}
export default Cart