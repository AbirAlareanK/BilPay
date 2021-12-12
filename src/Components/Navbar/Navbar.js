import { Nav } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navbar = () => {

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return(
        <Nav defaultActiveKey="/home" className="flex-column" onSelect={handleSelect}>
            <Nav.Link eventKey="link-0" href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default Navbar;