import { IoReceiptOutline } from 'react-icons/io5'
import Classes from './InvoiceBriefWrapper.module.css';
import Col from 'react-bootstrap/Col'

const InvoiceBriefWrapper = ({precentage , number , title , color}) => {
    return (
        <Col sm={12} md={3}>
            <div className={Classes.InvoBriefWrapper}>
                <div className={Classes.InvoBriefWrapperSec}>
                    <IoReceiptOutline color={color} size="25px"/>
                    <span >{number}</span>
                    <p>{title}</p>
                </div>
                <div style={{color:color, fontWeight:600}}>
                    {precentage} %
                </div>
            </div>
        </Col>
        
    );
}

export default InvoiceBriefWrapper;