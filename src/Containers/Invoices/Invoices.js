import InvoiceBriefArray from "./InvoiceBriefArray";
import DataTable from "../../Components/Table/DataTable";
import { Col , Row , Container } from "react-bootstrap";
import colData from '../../Assets/JSON/invoices-col-table.json';
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import { useState } from "react";
import Classes from './Invoices.module.scss';

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
                        <DataTable rows={rows}
                                    cols={colData}
                                    paging={true}
                                    sortable={false}
                                    small={true}
                                    label={["<", ">"]}
                                    infoLabel={["Showing", "to", "of", ""]} >
                            <section className={Classes.tableActionButtons}>
                                <h5>Latest Invoives</h5>                  
                                <ul>
                                <li>Monthly</li>
                                <li>Weekly</li>
                                <li>Today</li>
                                </ul>
                            </section>
                        </DataTable>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Invoices;


