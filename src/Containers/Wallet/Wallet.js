import { Col , Row } from 'react-bootstrap';
import Classes from '../Invoices/Invoices.module.scss';
import Styles from './Wallet.module.scss';
import AdminCard from '../../Components/UIs/AdminCard';
import user from '../../Assets/imgs/user.png';
import { BiTransfer , BiReceipt } from 'react-icons/bi';
import DataTable from '../../Components/Table/DataTable';
import cardData from '../../Assets/JSON/cards-data.json';
import colData from '../../Assets/JSON/invoices-col-table.json';
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import { useState } from 'react';
import invoicesSent from '../../Assets/JSON/invoices-sent.json';

const Wallet = () => {

    const [card ] = useState(cardData[0]);
    const { GetTableRows } = UseInvoices();
    const [ rows ] = useState(GetTableRows().slice(0,3));

    return (
        <>
            <Col md={9}>
                <Row>
                    <Col md={8}>
                        <div className={Styles.wallet}>
                            <AdminCard  className={Styles.walletCard}
                                    cardNum={card["card-number"]}
                                    balance={card["card-balance"]}
                                    validation={card["card-validation"]}/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Styles.buttonsContainer}>
                            <button className={Styles.transfer}>
                                <BiTransfer size={20} className={`${Styles.icon} ${Styles.trn}`}/>Transfer
                            </button>
                            <button className={Styles.send}>
                                <BiReceipt  size={20} className={`${Styles.icon} ${Styles.sen}`}/>Send Invoice
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <DataTable  className={`${Classes.InvoicesTable} ${Classes.invTable}`}
                                    rows={rows}
                                    entries={2}
                                    cols={colData}
                                    clickable={true}
                                    paging={false}
                                    sortable={false}
                                    small={true} >
                            <section className={Classes.tableActionButtons}>
                                <h5>Latest Invoices</h5>                  
                                <ul>
                                <li>Monthly</li>
                                <li>Weekly</li>
                                <li>Today</li>
                                </ul>
                            </section>
                        </DataTable>
                    </Col>
                </Row>
            </Col>   
            <Col md={3}>
                <div className={`${Styles.sentSection} card-wrapper`}>
                    <div className={Styles.sentHeader}>
                        <h6>Invoices sent</h6>
                        <p className={Classes.details}>...</p>
                    </div>
                    <ul>
                        {invoicesSent.map((row,i) => (
                            <li key={i} >
                                <img alt="profile" src={user} />
                                <div>
                                    <h6>{row.name}</h6>
                                    <p>{row.Time}</p>
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