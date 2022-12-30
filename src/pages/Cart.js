import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { changeName } from '../store'
import { upCount, downCount, removeItem } from '../store'

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
                    <th>변경</th>
                    <th>삭제</th>
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
                                    dispatch(upCount(data['id']))
                                }}>+</button>

                                <button style={{ marginLeft: '10px' }} onClick={() => {
                                    dispatch(downCount(data['id']))
                                }}>x</button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    dispatch(removeItem(data['id']))
                                }}>삭제</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}
export default Cart