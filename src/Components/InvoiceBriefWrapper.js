import { FaFileInvoiceDollar } from 'react-icons/fa'
import Classes from './InvoiceBriefWrapper.module.css';


const InvoiceBriefWrapper = ({precentage , number , title , color}) => {
    return (
        <div className={Classes.InvoBriefWrapper}>
            <div>
                <FaFileInvoiceDollar color={color}/>
                <span>{number}</span>
                <p>{title}</p>
            </div>
            <div>
                {precentage}
            </div>
        </div>
    );
}

export default InvoiceBriefWrapper;