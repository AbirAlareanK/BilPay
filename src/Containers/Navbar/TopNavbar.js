import SearchBar from "../../Components/Navbar/SearchBar";
import { Col } from 'react-bootstrap'

const TopNavbar = () => {
    return (
        <>
            <Col md={6}>
                <SearchBar />
            </Col>
            <Col md={6}>
            
            </Col>
        </>
    );
};

export default TopNavbar;