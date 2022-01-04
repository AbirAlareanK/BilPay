import { Col , Row } from 'react-bootstrap';
import Classes from '../Invoices/Invoices.module.scss';
import Styles from './Wallet.module.scss';
import AdminCard from '../../Components/UIs/AdminCard';
import user from '../../Assets/imgs/user.png';
import { BiTransfer , BiReceipt } from 'react-icons/bi';
import DataTable from '../../Components/Table/DataTable';
import cardData from '../../Assets/JSON/Cards/cards-data.json';
import colData from '../../Assets/JSON/Invoices/invoices-col-table.json';
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import { useState } from 'react';
import invoicesSent from '../../Assets/JSON/Invoices/invoices-sent.json';
import InvoiceFilter from '../../Components/Invoices/invoices-filter/InvoiceFilter';

const Wallet = () => {

    const [card ] = useState(cardData[0]);
    const { GetTableRows} = UseInvoices();

    return (
        <>
            <Col lg={9} md={12} sm={12}>
                <Row style={{paddingBottom:'25px'}}>
                    <Col lg={8} md={6} >
                        <div className={Styles.wallet}>
                            <AdminCard  className={Styles.walletCard}
                                    cardNum={card["card-number"]}
                                    balance={card["card-balance"]}
                                    validation={card["card-validation"]}
                                    color={"greenWBg"}/>
                        </div>
                    </Col>
                    <Col lg={4} md={6} >
                        <div className={Styles.buttonsContainer}>
                            <span className={Styles.transfer}>
                                <BiTransfer size={20} className={`${Styles.icon} ${Styles.trn}`}/>Transfer
                            </span>
                            <span className={Styles.send}>
                                <BiReceipt  size={20} className={`${Styles.icon} ${Styles.sen}`}/>Send Invoice
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row style={{paddingBottom:'20px'}}>
                    <Col lg={12}>
                        <DataTable  className={`${Classes.InvoicesTable} ${Classes.invTable}`}
                                    rows={GetTableRows()}
                                    entries={2}
                                    cols={colData}
                                    clickable={true}
                                    paging={false}
                                    sortable={false}
                                    small={true} >
                            <InvoiceFilter />
                        </DataTable>
                    </Col>
                </Row>
            </Col>   
            <Col lg={3} md={12}sm={12}>
                <div className={`${Styles.sentSection} card-wrapper`}>
                    <div className={Styles.sentHeader}>
                        <h6 className={Styles.heading}>Invoices sent</h6>
                        <p className={Styles.details}>...</p>
                    </div>
                    <ul>
                        {invoicesSent.map((row,i) => (
                            <li key={i} >
                                <div>
                                    <img alt="profile" src={user} />
                                    <div>
                                        <h6>{row.name}</h6>
                                        <p>{row.Time}</p>
                                    </div>
                                </div>
                                <p className={Styles.total}>
                                    {row.Total}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Col> 
        </>
    );
};

export default Wallet;