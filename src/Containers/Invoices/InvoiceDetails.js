import {  useState } from "react";
import { Col , Row , Container } from "react-bootstrap";
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import { AiFillWarning , AiFillCheckCircle } from 'react-icons/ai'
import InvoiceDetailsInfo from "../../Components/Invoices/invoice-details/InvoiceDetailsInfo";
const InvoiceDetails = () => {

   const { GetInvoiceDetails } =  UseInvoices();
   const [invoiceDetails] = useState({...GetInvoiceDetails('INV-006')});
   const [ services ] = useState([
       {
           serviceId : "INV-001S01",
           serviceName : "Web Design",
           serviceFee : 500
       },
       {
            serviceId : "INV-001S02",
            serviceName : "Web Developement",
            serviceFee : 1000
        }
   ]);

   const [ SubTotal  ] = useState(() => {
        const servicesfees = services.map(service => (service.serviceFee) )
        return servicesfees.reduce((preFee , currentFee) => preFee + currentFee , 0)
   });

   const statusIcon = invoiceDetails['status'] === 'paid' ?  <AiFillCheckCircle /> : <AiFillWarning/>
   const [discount] = useState(()=> {
       if(invoiceDetails['dicount-amount'] > 0){
            return (invoiceDetails['dicount-amount'] *  SubTotal / 100)
       }else{
           return 0 
       }
   });

    return (
        <Container fluid>
            <Row>
                <Col lg={3}>
                </Col>
                <Col lg={9}>
                    <h3>Invoice Details</h3>
                     <p><span>invoice</span>/ #{invoiceDetails['invoice-number']}</p>
                    <Row>
                       <Col lg={8} md={7} xs={12}>
                            <InvoiceDetailsInfo 
                                discount={discount}
                                subTotal={SubTotal}
                                invoiceDetails={invoiceDetails}
                                icon={statusIcon}
                                services={services}/>
                       </Col>
                       <Col lg={4} md={5} xs={12}>
                        <section className="card-wrapper">
                            
                        </section>
                       </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default InvoiceDetails;