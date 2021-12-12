import { Row , Col , Container} from 'react-bootstrap'
import Navbar from '../../Containers/Navbar/Navbar';
import Classes from './Layout.module.scss'

const Layout = (props) => {
    return (
      <Container>
        <Row>
          <Col xs={12} lg={2} className={`${Classes.Navbar} fixed-top one `}>
              <Navbar/>
          </Col>
          <Col xs={12} lg={10} className={`${Classes.contentContainer} offset-lg-2 two `}>
            {props.children}
          </Col>
        </Row>
      </Container>
    );
}

export default Layout;