import InvoiceBriefArray from "./InvoiceBriefArray";
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { Col } from "react-bootstrap";

const Invoices = () => {
    
    return(
        <Row>
            <Col lg={2}>
            </Col>
            <Col lg={10}>
                <Container>
                    <h3>Invoices</h3>
                    <Row>
                        <InvoiceBriefArray />
                    </Row>
                </Container>
            </Col>
        </Row>
        
    )
}

export default Invoices;


