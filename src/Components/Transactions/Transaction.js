import { BsPrinter } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import Button from '../../Components/UIs/Button';
import Classes from './Transaction.module.scss';


const Transaction = (props) => {
    const { services , tax ,  invoice } = props;

    return (
        <div className="card-wrapper">
            <section>
                <div className={Classes.tranheading}>
                    <div>
                        <h5>#{invoice['invoice-number']}</h5>
                        <p>{invoice['invoice-date']}</p>
                    </div>
                    <div className={Classes.actionButtons}>
                        <Button className={Classes.transButton}>
                            <BsPrinter size={16} />
                            Print
                        </Button>
                        <Button className={Classes.transButton}>
                            <FiDownload size={16} />
                            Download
                        </Button>
                    </div>
                </div>
                <div className={Classes.clientDetails}>
                    <div>
                        <p>Client</p>
                        <h6>{invoice['client']}</h6>
                    </div>
                    <div>
                        <p>Company</p>
                        <h6>{invoice['company-name']}</h6>
                    </div>
                    <div>
                        <p>Payment Type</p>
                        <h6>Paypal</h6>
                    </div>
                </div>
                <div className={Classes.darksection} style={{marginBottom:'15px'}}>
                    <h6 className={Classes.bold} style={{paddingBottom: '10px'}}>Service</h6>
                    <section className={Classes.devidedline}>
                        {services.map(service => (
                            <div key={service.id} className={Classes.linedsection}>
                                <h6>{service.serviceName}</h6>
                                <p>{`$${service.servicePrice}`}</p>
                            </div>
                        ))}
                    </section>
                    <section>
                        <div className={Classes.linedsection}>
                            <h6>Subtotal</h6>
                            <p>$800.00</p>
                        </div>
                        <div className={Classes.linedsection}>
                            <h6>Tax</h6>
                            <p>{`$${tax}`}</p>
                        </div>
                    </section>
                    <div className={Classes.linedsection}>
                        <h6  className={Classes.bold}>Total</h6>
                        <p>$810.00</p>
                    </div>
                </div>
                <div className={Classes.darksection}>
                    <h6 style={{paddingBottom: '10px'}} className={Classes.bold}>Note:</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </section>
        </div>
    )
}


export default Transaction;