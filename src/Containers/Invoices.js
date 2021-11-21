import InvoiceBriefArray from "./InvoiceBriefArray";
import InvoicesTable from '../Components/InvoicesTable';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { Col } from "react-bootstrap";
import colData from '../Assets/invoices-col-table.json';
import { UseInvoices } from "../Utils/Context/InvoicesProvider";
import { useState } from "react";

const Invoices = () => {
    
    const { GetTableRows } = UseInvoices();
    const [ rows ] = useState(GetTableRows());

    return(
        <Container fluid>
            <Row>
                <Col lg={3}>
                </Col>
                <Col lg={9}>
                    <h3>Invoices</h3>
                    <Row>
                        <InvoiceBriefArray />
                    </Row>
                    <Row>
                        <InvoicesTable rows={rows} cols={colData}/>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Invoices;


