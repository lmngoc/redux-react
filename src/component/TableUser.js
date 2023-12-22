import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, deleteUserRedux } from '../action/actions';
const TableUser = (props) => {

    //const [listUsers, setListUsers] = useState();

    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.user.listUsers);
    const isLoading = useSelector(state => state.user.isLoading);
    const isError = useSelector(state => state.user.isError);

    // const fetchAllData = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : [];
    //     setListUsers(data);
    // }
    useEffect(() => {
        //fetchAllData();
        dispatch(fetchAllUsers());
    }, []);
    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id));
    }
    return (
        <>
            <Container className='mt-3'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>UserName</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {isError === true ?
                        <>Something wrong, please try again</> :
                        <>
                            {isLoading === true ?
                                <><div>Loading data ...</div></> :
                                <>
                                    <tbody>
                                        {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                            return (
                                                <tr key={`index-${index}`}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.username}</td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() => handleDeleteUser(item)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}


                                    </tbody>

                                </>
                            }
                        </>
                    }
                </Table>
            </Container>
        </>

    )
}
export default TableUser;