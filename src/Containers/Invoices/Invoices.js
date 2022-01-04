import InvoiceBriefArray from "./InvoiceBriefArray";
import DataTable from "../../Components/Table/DataTable";
import { Col , Row } from "react-bootstrap";
import colData from '../../Assets/JSON/Invoices/invoices-col-table.json';
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import Classes from './Invoices.module.scss';
import InvoiceFilter from "../../Components/Invoices/invoices-filter/InvoiceFilter";

const Invoices = () => {
    
    const { GetTableRows } = UseInvoices();

    return(
        <>
            <Col lg={12}>
                <Row>
                    <InvoiceBriefArray /> 
                </Row>
            </Col>
            <Col lg={12}>
                <DataTable  className={Classes.InvoicesTable}
                            rows={GetTableRows()}
                            cols={colData}
                            clickable={true}
                            paging={true}
                            sortable={false}
                            small={true}
                            label={["<", ">"]}
                            infoLabel={["Showing", "to", "of", ""]} >
                    <InvoiceFilter />
                </DataTable>
            </Col>
        </>
    )
}

export default Invoices;


