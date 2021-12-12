import { useState } from 'react';
import { BsPrinter , BsDownload} from 'react-icons/bs';
import Button from '../../Components/UIs/Button';
import Classes from './Transaction.module.scss';


const Transaction = (props) => {
    const { invoice } = props
    const [ services ] = useState([
        {
            id : 'SER_001',
            serviceName : 'Web Design and Development',
            servicePrice : '750.00'
        },
        {
            id : 'SER_002',
            serviceName : 'Hosting',
            servicePrice : '50.00'
        }
    ]);

    const [ tax ] = useState('10.00');

    return (
        <div className="card-wrapper">
            <section>
                <h4>{invoice['invoice-number']}</h4>
                <p>{invoice['invoice-date']}</p>
                <div>
                    <Button>
                        <BsPrinter />
                        Print
                    </Button>
                    <Button>
                        <BsDownload />
                        Download
                    </Button>
                </div>
                <div className={Classes.clientDetails}>
                    <div>
                        <h5>Client</h5>
                        <p>{invoice['client']}</p>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <p>{invoice['company-name']}</p>
                    </div>
                    <div>
                        <h5>Payment Type</h5>
                        <p>Paypal</p>
                    </div>
                </div>
                <div className={Classes.serviceSection}>
                    <h5>Service</h5>
                    {services.map(service => (
                        <div key={service.id}>
                            <h5>{service.serviceName}</h5>
                            <p>{`$${service.servicePrice}`}</p>
                        </div>
                    ))}
                    <span className={Classes.deviderline}/>
                    <div>
                        <h5>Subtotal</h5>
                        <p>$800.00</p>
                    </div>
                    <div>
                        <h5>Tax</h5>
                        <p>{`$${tax}`}</p>
                    </div>
                    <div>
                        <h5>Total</h5>
                        <p>$810.00</p>
                    </div>
                </div>
                <div className={Classes.note}>
                    <h5>Note:</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </section>
        </div>
    )
}


export default Transaction;