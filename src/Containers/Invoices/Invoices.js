import InvoiceBriefArray from "./InvoiceBriefArray";
import DataTable from "../../Components/Table/DataTable";
import { Col , Row } from "react-bootstrap";
import colData from '../../Assets/JSON/invoices-col-table.json';
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import { useState } from "react";
import Classes from './Invoices.module.scss';

const Invoices = () => {
    
    const { GetTableRows } = UseInvoices();
    const [ rows ] = useState(GetTableRows());
    return(
        <>
            <Col lg={12}>
                <Row>
                    <InvoiceBriefArray /> 
                </Row>
            </Col>
            <Col lg={12}>
                <DataTable  className={Classes.InvoicesTable}
                            rows={rows}
                            cols={colData}
                            clickable={true}
                            paging={true}
                            sortable={false}
                            small={true}
                            label={["<", ">"]}
                            infoLabel={["Showing", "to", "of", ""]} >
                    <section className={Classes.tableActionButtons}>
                        <h5>Latest Invoices</h5>                  
                        <ul>
                        <li>Monthly</li>
                        <li>Weekly</li>
                        <li>Today</li>
                        </ul>
                    </section>
                </DataTable>
            </Col>
        </>
    )
}

export default Invoices;


