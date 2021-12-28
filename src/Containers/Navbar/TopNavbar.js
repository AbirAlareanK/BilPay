import SearchBar from "../../Components/Navbar/SearchBar";
import { Col , Row } from 'react-bootstrap';
import { BiEnvelope } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import Classes from './TopNavbar.module.scss';
import profileImage from '../../Assets/imgs/profile.png'
import NotificationMenu from "../../Components/Notifications/NotificationMenu";

const TopNavbar = () => {
    return (
        <Row style={{paddingLeft: '15px',paddingRight:'15px' , alignItems: 'center'}}>
            <Col lg={7} md={5} sm={6}>
                <SearchBar />
            </Col>
            <Col lg={3} md={4} sm={3}>
                <ul className={Classes.adminButtonActions}>
                    <li><NotificationMenu /> </li>
                    <li><BiEnvelope size={20}/></li>
                    <li><FiSettings size={20}/></li>
                </ul>
            </Col>
            <Col lg={2} md={3} sm={3}>
                <div className={Classes.adminProfile}>
                    <div>
                        <h6>Tony Soup</h6>
                        <p>Admin</p>
                    </div>
                    <img alt="profile" src={profileImage} />
                </div>
            </Col>
        </Row>
    );
};

export default TopNavbar;