import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
const Header = (props) => {
    const listUsers = useSelector(state => state.user.listUsers);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" bg="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                            <NavDropdown title={`(${listUsers.length}) users`} id="basic-nav-dropdown">
                                {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                    return (
                                        <NavDropdown.Item key={`index-${index}`} href='#'>{item.email}</NavDropdown.Item>
                                    )
                                })}


                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
export default Header;