import { IoReceiptOutline } from 'react-icons/io5'
import Classes from './InvoiceBriefWrapper.module.scss';
import {Col } from 'react-bootstrap'

const InvoiceBriefWrapper = ({precentage , number , title , color}) => {
    return (
        <Col xs={12} sm={6} md={3} lg={3} className="wrapper-padding">
            <div className={`${Classes.InvoBriefWrapper} card-wrapper`}>
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