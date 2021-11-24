import InvoiceBriefArray from "./InvoiceBriefArray";
import InvoicesTable from '../../Components/Invoices/invoice-table/InvoicesTable';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { Col } from "react-bootstrap";
import colData from '../../Assets/JSON/invoices-col-table.json';
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import { useState } from "react";
// import Classes from './Invoices.module.scss';

const Invoices = () => {
    
    const { GetTableRows } = UseInvoices();
    const [ rows ] = useState(GetTableRows());

    return(
        <Container fluid className="full-view">
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


