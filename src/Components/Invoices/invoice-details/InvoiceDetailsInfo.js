import Button from '../../UIs/Button';
import { Row , Col } from 'react-bootstrap';
import Classes from './InvoiceDetailsInfo.module.scss';

const InvoiceDetailsInfo = ({invoiceDetails , subTotal , discount , icon , services}) => {
    return (
        <section className={` ${Classes.invoiceDetailContent} card-wrapper`}>
            <div className={Classes.invoiceDetailsHead}>
                <div>
                    <span>invoice </span>
                    <p>#{invoiceDetails['invoice-number']}</p>
                </div>
                <Button className={Classes.paidButton}>
                    {icon}
                    {invoiceDetails['status']}
                </Button>
            </div>
            <Row className={Classes.clientInformation}>
                <Col xs={6} className={Classes.info}>
                    <span />
                    <section>
                        <h6>Client</h6>
                        <p>{invoiceDetails['client']}</p>
                    </section>
                </Col>
                <Col xs={6} >
                    <h6>Due Date</h6>
                    <p>{invoiceDetails['invoice-date']}</p>
                </Col>
                <Col xs={6} >
                    <h6>Address</h6>
                    <p>{invoiceDetails['company-address']}</p>
                </Col>
                <Col xs={6}>
                    <h6>Contact</h6>
                    <p>+60-23145678</p>
                    <p>{invoiceDetails['email']}</p>
                </Col>
                <Col xs={6}>
                    <h6>Bank Information</h6>
                    <p>National Bank</p>
                    <p>Johe Doe</p>
                    <p>12345698</p>
                </Col>
            </Row>
            <div className={Classes.invoiceBreakdown}>
                <div>
                    <h6>Services</h6>
                    <ul>
                        {services.map(service => (
                            <li key={service.serviceId}>{service.serviceName}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h6>Amount</h6>
                    <ul>
                        {services.map(service => (
                            <li key={service.serviceId}>{service.serviceFee}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={Classes.invoiceSubtotal}>
                <div>
                    <p>Subtotal</p>
                    <p>Discount %{invoiceDetails['dicount-amount']}</p>
                    <p className={Classes.totalAmount}>Total</p>
                </div>
                <div>
                    <ul>
                        <li>{subTotal}</li>
                        <li>{discount}</li>
                        <li className={Classes.totalAmount}>{ subTotal - discount}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default InvoiceDetailsInfo;