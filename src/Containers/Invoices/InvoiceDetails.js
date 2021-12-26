import {  useState } from "react";
import { Col } from "react-bootstrap";
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import Classes from './InvoiceDetails.module.scss'
import { AiFillWarning , AiFillCheckCircle } from 'react-icons/ai'
import InvoiceDetailsInfo from "../../Components/Invoices/invoice-details/InvoiceDetailsInfo";
import PaymentCard from "../../Components/Invoices/payment-card/PaymentCard";
import Button from "../../Components/UIs/Button";
import { BsPrinter , BsCheckCircle , BsDownload} from 'react-icons/bs';
import  {IoSendOutline} from 'react-icons/io5'


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
        <>
        {/* <section className={Classes.sectionHeader}>
                <h5>Invoice Details</h5>
                <p><span>invoice</span>/ #{invoiceDetails['invoice-number']}</p>
            </section> */}
            <Col lg={8} xs={12}>
                    <InvoiceDetailsInfo 
                        discount={discount}
                        subTotal={SubTotal}
                        invoiceDetails={invoiceDetails}
                        icon={statusIcon}
                        services={services}/>
            </Col>
            <Col lg={4} xs={12}>
                <PaymentCard />
                <section className={Classes.invoiceDetailsActions}>
                    <Button><BsCheckCircle />Mark Paid</Button>
                    <Button><BsDownload />Download</Button>
                    <Button><BsPrinter />Print</Button>
                    <Button><IoSendOutline />Send</Button>
                </section>
            </Col>
        </>
    );
}

export default InvoiceDetails;