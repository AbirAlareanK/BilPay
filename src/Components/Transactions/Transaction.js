import { BsPrinter , BsDownload} from 'react-icons/bs';
import Button from '../../Components/UIs/Button';
import Classes from './Transaction.module.scss';


const Transaction = (props) => {
    const {service , invoice } = props
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