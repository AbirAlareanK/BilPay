import Classes from './InvoiceDetailsInfo.module.css';

const InvoiceDetailsInfo = ({invoiceDetails , subTotal , discount , icon , services}) => {
    return (
        <section className="card-wrapper">
            <div className={Classes.invoiceDetailsHead}>
                <div>
                    <span>invoice</span>/ <p>#{invoiceDetails['invoice-number']}</p>
                </div>
                <span>
                    {icon}
                    {invoiceDetails['status']}
                </span>
            </div>
            <div className={Classes.clientInformation}>
                <div className={Classes.info}>
                    <h6>Client</h6>
                    <p>{invoiceDetails['client']}</p>
                </div>
                <div className={Classes.info}>
                    <h6>Due Date</h6>
                    <p>{invoiceDetails['invoice-date']}</p>
                </div>
                <div className={Classes.info}>
                    <h6>Address</h6>
                    <p>{invoiceDetails['company-address']}</p>
                </div>
                <div className={Classes.info}>
                    <h6>Contact</h6>
                    <p>+60-23145678</p>
                    <p>{invoiceDetails['email']}</p>
                </div>
                <div className={Classes.info}>
                    <h6>Bank Information</h6>
                    <p>National Bank</p>
                    <p>Johe Doe</p>
                    <p>12345698</p>
                </div>
            </div>
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
                        <li>{ subTotal - discount}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default InvoiceDetailsInfo;