import { IoReceiptOutline } from 'react-icons/io5'
import Classes from './InvoiceBriefWrapper.module.css';


const InvoiceBriefWrapper = ({precentage , number , title , color}) => {
    return (
        <div className={Classes.InvoBriefWrapper}>
            <div className={Classes.InvoBriefWrapperSec}>
                <IoReceiptOutline color={color} size="26px"/>
                <span >{number}</span>
                <p>{title}</p>
            </div>
            <div style={{color:color}}>
                {precentage}
            </div>
        </div>
    );
}

export default InvoiceBriefWrapper;